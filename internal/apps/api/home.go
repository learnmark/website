package api

import (
	"github.com/gin-gonic/gin"
	sv "github.com/learnmark/website/internal/services"
)

var Home = home{}

type home struct{}

func (c *home) Home(ctx *gin.Context) {
	s := sv.Context(ctx)
	s.Json(123)
}
