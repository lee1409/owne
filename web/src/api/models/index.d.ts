interface IGetMenu {
  restaurants: {
    id: string
    name: string
    categories: {
      name: string
      foods: {
        id: string
        name: string
        description: string
        hashtags: {
          name: string
        }[]
        featured_image?: {
          id: string
          url: string
        }
        images: {
          url: string
          width: number
          height: number
        }[]
      }[]
    }[]
  }[]
}

interface MenuVariable {
  slug: string
}
