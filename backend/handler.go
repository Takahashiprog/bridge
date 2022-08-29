package main

import (
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/takahashiprog/bridge/backend/model"
)

type loginInput struct {
	email    string `json:"email" binding:"required"`
	password string `json:"password" binding:"required"`
}

type jwtCustomClaims struct {
	ID       uint   `json:"id"`
	SchoolID string `json:"school_id"`
	jwt.StandardClaims
}

var config = middleware.JWTConfig{
	Claims:     &jwtCustomClaims{},
	SigningKey: signingKey,
}

var signingKey []byte

func init() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}
	signingKey = []byte(os.Getenv("SIGNING_KEY"))
}

func signup(c echo.Context) error {
	school := new(model.School)
	if err := c.Bind(school); err != nil {
		return err
	}

	if school.SchoolID == "" || school.Password == "" {
		return &echo.HTTPError{
			Code:    http.StatusBadRequest,
			Message: "Invalid id or password",
		}
	}

	if s := model.FindSchool(&model.School{SchoolID: school.SchoolID}); s.ID != 0 {
		return &echo.HTTPError{
			Code:    http.StatusConflict,
			Message: "School ID already exists",
		}
	}

	model.CreateSchool(school)
	school.Password = ""

	return c.JSON(http.StatusCreated, school)
}

func login(c echo.Context) error {
	s := new(model.School)
	if err := c.Bind(s); err != nil {
		return err
	}

	school := model.FindSchool(&model.School{SchoolID: s.SchoolID})
	if school.ID == 0 || school.Password != s.Password {
		return &echo.HTTPError{
			Code:    http.StatusUnauthorized,
			Message: "Invalid id or password",
		}
	}

	claims := &jwtCustomClaims{
		school.ID,
		school.SchoolID,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	t, err := token.SignedString(signingKey)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, map[string]string{
		"token": t,
	})
}
