package request

type ProductReview struct {
	Title     string  `json:"title"`
	Content   string  `json:"content"`
	Rating    float32 `json:"rating"`
	ProductID int     `json:"product_id"`
	UserID    int     `json:"user_id"`
}
