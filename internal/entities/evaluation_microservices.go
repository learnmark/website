package entities

type EvaluationMicroservices struct {
	Base
	CompanyName            string `yaml:"companyName"`
	Email                  string `yaml:"email"`
	ViewCode               string `yaml:"viewCode"`
	AppName                string `yaml:"appName"`
	SourceCodeAccessible   bool   `yaml:"sourceCodeAccessible"`
	SourceCodeMaintainable bool   `yaml:"sourceCodeMaintainable"`
	VendorSupportStatus    string `yaml:"vendorSupportStatus"`
	ContainerizationStatus string `yaml:"containerizationStatus"`
	UseKubernetes          bool   `yaml:"useKubernetes"`
	IterationPerMonth      int    `yaml:"iterationPerMonth"`

	BackendLanguage               string `yaml:"backendLanguage"`
	BackendFramework              string `yaml:"backendFramework"`
	EastWestCommunicationProtocol string `yaml:"eastWestCommunicationProtocol"`

	UseRegistry     bool   `yaml:"useRegistry"`
	RegistryType    string `yaml:"registryType"`
	RegistryVersion string `yaml:"registryVersion"`

	UseConfigurationCenter  bool   `yaml:"useConfigurationCenter"`
	ConfigurationCenterType string `yaml:"configurationCenterType"`

	UseEastWestServiceGovernance               bool   `yaml:"useEastWestServiceGovernance"`
	EastWestServiceGovernanceType              string `yaml:"eastWestServiceGovernanceType"`
	UseEastWestServiceGovernanceRateLimit      bool   `yaml:"useEastWestServiceGovernanceRateLimit"`
	UseEastWestServiceGovernanceCircuitBreaker bool   `yaml:"useEastWestServiceGovernanceCircuitBreaker"`
	UseEastWestServiceGovernanceOthers         string `yaml:"useEastWestServiceGovernanceOthers"`

	UseGateway       bool   `yaml:"useGateway"`
	GatewayType      string `yaml:"gatewayType"`
	UseGatewayRoute  bool   `yaml:"useGatewayRoute"`
	UseGatewayCORS   bool   `yaml:"useGatewayCORS"`
	UseGatewayAuth   bool   `yaml:"useGatewayAuth"`
	UseGatewayJWT    bool   `yaml:"useGatewayJWT"`
	UseGatewayOthers bool   `yaml:"useGatewayOthers"`

	UseTracing  bool   `yaml:"useTracing"`
	TracingType string `yaml:"tracingType"`

	UseLogging       bool   `yaml:"useLogging"`
	LoggingType      string `yaml:"loggingType"`
	UseLoggingApp    bool   `yaml:"useLoggingApp"`
	UseLoggingAccess bool   `yaml:"useLoggingAccess"`

	UseDistributedTransaction  bool   `yaml:"useDistributedTransaction"`
	DistributedTransactionType string `yaml:"distributedTransactionType"`

	EvaluationResult string `yaml:"evaluationResult"`
}
