package request

type ProductPhoto struct {
	ImageURL  string `json:"image_url"`
	ProductID int    `json:"product_id"`
}
