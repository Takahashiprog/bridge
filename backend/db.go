package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

type school struct {
	gorm.Model
	email    string `gorm:"size:255;not null;unique" json:"email"`
	password string `gorm:"size:255;not null;" json:"password"`
}

func init() {
	var err error
	db, err = gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	if err != nil {
		panic("Error: failed to connect database")
	}

	db.AutoMigrate(&school{})
}
