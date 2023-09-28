package request

type RestaurantPhoto struct {
	ImageURL     string `binding:"required" json:"image_url"`
	RestaurantID int    `binding:"required" json:"restaurant_id"`
}
