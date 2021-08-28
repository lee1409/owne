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

const Menu = {
    useGetMenu: () => useQuery(getMenu),
}

export default Menu;
