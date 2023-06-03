package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/learnmark/website/internal/apps/api"
	v1 "github.com/learnmark/website/internal/apps/api/v1"
)

func RegisterWebsiteRoute(engine *gin.Engine) {
	rootPath := "api"
	rootGroup := engine.Group(rootPath)
	rootGroup.GET("/version", api.Root.GetVersion)

	v1Group := engine.Group(rootPath + "/v1")
	v1Group.GET("/", v1.Root.Root)
	v1Group.GET("/consultants", v1.Consultant.List)
	v1Group.GET("/consultants/:uuid", v1.Consultant.Get)
}
