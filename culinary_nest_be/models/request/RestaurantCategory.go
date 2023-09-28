package request

type RestaurantCategory struct {
	Title string `binding:"required" json:"title"`
}
