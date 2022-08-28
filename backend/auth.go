package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type loginInput struct {
	email string `json:"email" binding:"required"`
	password string `json:"password" binding:"required"`
}

func jwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

	}
}

func signup(c *gin.Context) {
	
}

func login(c *gin.Context) {
	var input loginInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	u := user{}
}