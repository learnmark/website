package entities

type EvaluationMicroservices struct {
	Entity
	CompanyName            string
	Email                  string
	ViewCode               string
	AppName                string
	SourceCodeAccessible   bool
	SourceCodeMaintainable bool
	VenderSupportStatus    string
	ContainerizationStatus string
	UseKubernetes          bool
	IterationPerMonth      int

	BackendLanguage               string
	BackendFramework              string
	EastWestCommunicationProtocol string

	UseRegistry     bool
	RegistryType    string
	RegistryVersion string

	UseConfigurationCenter  bool
	ConfigurationCenterType string

	UseEastWestServiceGovernance               bool
	EastWestServiceGovernanceType              string
	UseEastWestServiceGovernanceRateLimit      bool
	UseEastWestServiceGovernanceCircuitBreaker bool
	UseEastWestServiceGovernanceOthers         string

	UseGateway      bool
	GatewayType     string
	UseGatewayRoute bool
	UseGatewayCORS  bool
	UseGatewayAuth  bool
	UseGatewayJWT   bool

	UseTracing  bool
	TracingType string

	UseLogging       bool
	LoggingType      string
	UseLoggingApp    bool
	UseLoggingAccess bool

	UseDistributedTransaction  bool
	DistributedTransactionType string

	EvaluationResult string
}
