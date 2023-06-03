package v1

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/learnmark/website/internal/services"
)

var Consultant = consultant{}

type consultant struct{}

func (c *consultant) List(ctx *gin.Context) {
	s := services.Context(ctx)

	s.Json(1)
}

func (c *consultant) Get(ctx *gin.Context) {
	s := services.Context(ctx)
	consultantUUID := s.Ctx.Param("uuid")
	fmt.Println(consultantUUID)

	s.Json(1)
}
