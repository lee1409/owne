import { gql, useQuery } from "@apollo/client"

const getMenu = gql`
  query Menu {
    restaurants {
      name
      address
      categories {
        foods {
          images
          name
          description
          hashtags {
            name
          }
        }
      }
    }
  }
`

export const useGetMenu = () => useQuery(getMenu);