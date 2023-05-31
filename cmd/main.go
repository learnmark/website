package main

import (
	"github.com/learnmark/website/cmd/server"
	_ "github.com/learnmark/website/pkg/config"
)

func main() {
	server.Run()
}
