package entities

import (
	"time"
)

type Base struct {
	UUID      string
	DeletedAt time.Time
	CreatedAt time.Time
	UpdatedAt time.Time
}
