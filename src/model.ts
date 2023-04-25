//Utility Props
export interface Utility {
  isMobile: boolean
}

//Newly Added Product
export interface NewlyAddedProductData {
  id: number
  item_name: string
  item_type: string
  preparation_time: number
  price: number
  available_qty: number
  is_favorite: boolean
  is_cart: boolean
  item_qty: number
  tax: number
  image_name: string
  image_url: string
  item_description: string
  category_info: {
    id: number
    category_name: string
    slug: string
    image_url: string
  }
  subcategory_info: {
    id: number
    subcategory_name: string
    slug: string
  }
  has_variation: number
  attribute: number
  variation: []
  addons: []
}
