package entities

import (
	"time"
)

type Entity struct {
	UUID      string
	DeletedAt time.Time
	CreatedAt time.Time
	UpdatedAt time.Time
}
