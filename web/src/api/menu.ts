import { gql, useQuery } from "@apollo/client"

const menu = gql`
  query Menu {
    restaurants {
      name
      address
      categories {
        foods {
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
    useGetMenu: () => useQuery(menu),
}

export default Menu;
