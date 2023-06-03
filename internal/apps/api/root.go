package api

import (
	"github.com/gin-gonic/gin"
	"github.com/learnmark/website/internal/services"
)

var Root = root{}

type root struct {
	Version string `json:"version"`
}

func (c *root) GetVersion(ctx *gin.Context) {
	s := services.Context(ctx)
	c.Version = "v1.0.0"
	s.Json(c)
}
