//Utility Props
export interface Utility {
  isMobile: boolean
}

//Product Data
export interface ProductData {
  price: string
  available_qty: string
  item_name: string
  category_info: {
    category_name: string
  }
  image_name: string
  image_url: string
}
