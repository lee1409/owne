import { gql, useQuery } from "@apollo/client"

const getStories = gql`
  query getStories ($id: ID!) {
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


const Story = {
    useGetStories: () => useQuery(getStories),
}

export default Story;
