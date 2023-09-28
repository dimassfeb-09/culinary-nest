package request

type Register struct {
	Name     string `binding:"required" json:"name"`
	Email    string `binding:"required" json:"email"`
	Password string `binding:"required,min=6,max=12" json:"password"`
}

type Login struct {
	Email    string `binding:"required" json:"email"`
	Password string `binding:"required" json:"password"`
}
