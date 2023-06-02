package api

import (
	"github.com/learnmark/website/internal/services"
)

//func RootService(ctx *gin.Context) *SRoot {
//	return &SRoot{ctx: services.Context(ctx)}
//}

type SRoot struct {
	ctx *services.BaseContext
}
