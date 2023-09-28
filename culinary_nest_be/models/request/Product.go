package request

type Product struct {
	Title        string  `binding:"required" json:"title"`
	Description  string  `binding:"required" json:"description"`
	Price        float32 `binding:"required" json:"price"`
	RestaurantID int     `binding:"required" json:"restaurant_id"`
}
