import React from "react"
import SearchBar, { SearchItem } from "../../components/SearchBar"
import { gql, useQuery } from "@apollo/client"
import { useHistory } from "react-router-dom"

// Contains logic
export default function FoodSearchBar() {
  const [state, setState] = React.useState("")

  const { loading, data } = useQuery<{
    foods: {
      id: string
      name: string
    }[]
  }>(
    gql`
      query SearchFood($query: String!) {
        foods(where: { name_contains: $query }) {
          id
          name
        }
      }
    `,
    {
      pollInterval: 1000,
      variables: { query: state },
      skip: state === "",
    }
  )
  const history = useHistory()
  const result = data ? Array.from(data.foods) : []

  const handleClick = (_: any, item: SearchItem) => {}

  return (
    <SearchBar
      onEnter={e => {
        e.preventDefault()
        history.push(`/search?q=${state}`)
      }}
      loading={loading}
      value={state}
      onChange={e => setState(e.target.value)}
      resultClick={handleClick}
      options={result}
    />
  )
}
