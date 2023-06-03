package api

import (
	"github.com/gin-gonic/gin"
	sv "github.com/learnmark/website/internal/services"
)

var Root = root{}

type root struct{}

func (c *root) Version(ctx *gin.Context) {
	s := sv.Context(ctx)
	s.Json("v1.0.0")
}
