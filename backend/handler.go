package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

type loginInput struct {
	email string `json:"email" binding:"required"`
	password string `json:"password" binding:"required"`
}

func signup(c echo.Context) error {
	return c.String(http.StatusOK, "OK!")
}

func login(c echo.Context) error {
	return c.String(http.StatusOK, "OK?")
}