package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/learnmark/website/internal/apps/api"
	v1 "github.com/learnmark/website/internal/apps/api/v1"
)

func RegisterWebsiteRoute(engine *gin.Engine) {
	rootPath := "api"
	rootGroup := engine.Group(rootPath)
	rootGroup.GET("/version", api.Root.Version)

	v1Group := engine.Group(rootPath + "/v1")
	v1Group.GET("/", v1.V1Root.Root)
}
