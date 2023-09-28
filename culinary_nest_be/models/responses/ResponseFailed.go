package responses

type ResponseFailed struct {
	Success bool `json:"success"`
}

type ResponseFailedWithMessage struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}
