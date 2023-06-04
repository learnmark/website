package entities

import (
	"time"
)

type Base struct {
	UUID      string    `yaml:"uuid"`
	CreatedAt time.Time `yaml:"createdAt"`
	UpdatedAt time.Time `yaml:"updatedAt"`
}
