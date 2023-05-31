package api

import (
	"github.com/gin-gonic/gin"
	"github.com/learnmark/website/internal/services"
)

func HomeService(ctx *gin.Context) *sHome {
	return &sHome{ctx: services.Context(ctx)}
}

type sHome struct {
	ctx *services.BaseContext
}
