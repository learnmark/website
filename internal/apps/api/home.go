package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/learnmark/website/internal/entities"
	sv "github.com/learnmark/website/internal/services"
	"gopkg.in/yaml.v3"
	"log"
	"os"
)

var Home = home{}

type home struct{}

func (c *home) Home(ctx *gin.Context) {
	s := sv.Context(ctx)
	con := entities.Consultant{
		Name: "demo-go",
		Base: entities.Base{
			UUID: uuid.NewString(),
		},
	}
	fmt.Println(con)
	conf, err := yaml.Marshal(con)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(conf))

	yamlFile, err := os.ReadFile("./data/consultant/wilsonwu.yaml")
	if err != nil {
		s.Json(err)
		log.Printf("yamlFile.Get err   #%v ", err)
	}
	wilson := entities.Consultant{}
	err = yaml.Unmarshal(yamlFile, &wilson)
	if err != nil {
		s.Json(err)
		log.Fatalf("Unmarshal: %v", err)
	}
	fmt.Println(wilson)

	f, err := os.Create("./data/evaluation/" + uuid.NewString() + ".yaml")

	if err != nil {
		log.Fatal(err)
	}
	defer func(f *os.File) {
		err := f.Close()
		if err != nil {

		}
	}(f)

	con1 := entities.EvaluationMicroservices{
		AppName: "123abc",
		Base: entities.Base{
			UUID: uuid.NewString(),
		},
	}
	fmt.Println(con1)
	conf1, err := yaml.Marshal(con1)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(conf1))
	_, err2 := f.WriteString(string(conf1))

	if err2 != nil {
		log.Fatal(err2)
	}

	s.Json(wilson)
}
