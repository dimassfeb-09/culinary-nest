package responses

type ResponseSuccess struct {
	Success bool `json:"success"`
}

type ResponseSuccessWithData struct {
	Success bool `json:"success"`
	Data    any  `json:"data"`
}
