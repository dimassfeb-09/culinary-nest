package responses

type Restaurant struct {
	Title                string `json:"title"`
	Description          string `json:"description"`
	Address              string `json:"address"`
	Open                 string `json:"open"`
	Closed               string `json:"closed"`
	CategoryRestaurantID int    `json:"category_restaurant_id"`
}
