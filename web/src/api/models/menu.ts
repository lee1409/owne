import { gql, useQuery } from "@apollo/client"

const getMenu = gql`
  query GetMenu($id: ID!) {
    restaurant(id: $id) {
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

export const useGetMenu = (id: number) => useQuery<IGetMenu, MenuVariable>(getMenu, {
  variables: { id }
})
