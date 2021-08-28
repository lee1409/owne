import { gql, useQuery } from "@apollo/client"

const getFood = gql`
  query GetFood ($id: ID!) {
    food(id: $id) {
      id
      name
      description
      hashtags {
        name
      }
      restaurant {
        name
      }
    } 
  }
`

const Food = {
    useGetFood: (id: String) => useQuery(getFood, {
        variables: { id },
    }),
}

export default Food;
