package responses

type Product struct {
	Title        string  `json:"title"`
	Description  string  `json:"description"`
	Price        float32 `json:"price"`
	RestaurantID int     `json:"restaurant_id"`
}
