package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/learnmark/website/internal/apps/api"
)

func RegisterWebsiteRoute(engine *gin.Engine) {
	group := engine.Group("/")

	group.GET("/", api.Root.Root)
}
