package main

import (
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"os"
)

var db *gorm.DB

type user struct {
	gorm.Model
	email string `gorm:"size:255;not null;unique" json:"email"`
	password string `gorm:"size:255;not null;" json:"password"`
}

func init() {
	mysqlUser := os.Getenv("MYSQL_USER")
	mysqlPass := os.Getenv("MYSQL_PASSWORD")
	mysqlAddr := os.Getenv("MYSQL_ADDRESS")
	mysqlPort := os.Getenv("MYSQL_PORT")
	mysqlDBName := os.Getenv("MYSQL_DATABASE")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", mysqlUser, mysqlPass, mysqlAddr, mysqlPort, mysqlDBName)
	log.Println("Info: DSN -> ", dsn)
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Error: failed to connect database")
	}

	db.AutoMigrate(&user{})
}
