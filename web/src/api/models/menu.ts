import { gql, useQuery } from "@apollo/client"

const getMenu = gql`
  query GetMenu($slug: String!) {
    restaurants(where: {slug: $slug}) {
      id
      name
      categories {
        name
        foods {
          id
          name
          description
          hashtags {
            name
          }
          featured_image {
            id
            url
          }
          images {
            url
            width
            height
          }
        }
      }
    }
  }
`

export const useGetMenu = (slug: string) => useQuery<IGetMenu, MenuVariable>(getMenu, {
  variables: { slug }
})
