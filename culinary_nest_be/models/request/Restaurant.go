package request

type Restaurant struct {
	Title                string `binding:"required" json:"title"`
	Description          string `binding:"required" json:"description"`
	Address              string `binding:"required" json:"address"`
	Open                 string `binding:"required" json:"open"`
	Closed               string `binding:"required" json:"closed"`
	CategoryRestaurantID int    `binding:"required" json:"category_restaurant_id"`
}
