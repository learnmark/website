package entities

type Consultant struct {
	Base
	Name         string `yaml:"name"`
	Title        string `yaml:"title"`
	Introduction string `yaml:"introduction"`
	AvatarUrl    string `yaml:"AvatarUrl"`
}
