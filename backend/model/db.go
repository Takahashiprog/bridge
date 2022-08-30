package model

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

type School struct {
	gorm.Model
	SchoolID string `gorm:"size:255;not null;unique" json:"school_id"`
	Password string `gorm:"size:255;not null;" json:"password"`
}

type Org struct {
	gorm.Model
	OrgID    string `gorm:"size:255;not null; unique" json:"org_id"`
	Password string `gorm:"size:255;not null; unique" json:"password"`
}

func FindSchool(s *School) School {
    var school School
    db.Where(s).First(&school)
    return school
}

func CreateSchool(school *School) {
    db.Create(school)
}

func init() {
	var err error
	db, err = gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	if err != nil {
		panic("Error: failed to connect database")
	}

	db.AutoMigrate(&School{})
	db.AutoMigrate(&Org{})
}
