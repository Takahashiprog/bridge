package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.POST("/schools/signup", signup)
	e.POST("/schools/login", login)

	e.Logger.Fatal(e.Start(":3000"))
}
