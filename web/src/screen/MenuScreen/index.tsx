import Menu from "../../components/Menu"
import { useMediaQueryUp } from "../../utils/hook"
import { useGetMenu } from "../../api/models/menu"
import { useEffect } from "react"

function MenuScreen(): JSX.Element | null {
  const matchedLg = useMediaQueryUp("lg")
  // todo change sample
  const { data, loading, error } = useGetMenu(1)

  useEffect(() => {
    // Get the current location
    if (navigator) {
      navigator.geolocation.getCurrentPosition(() => {
        // Todo
        // Pass the location to Google Location API
        // Then get the restaurant menu based on the name
      })
    }
  })

  if (loading) return null
  else if (!data?.restaurant?.categories) return <div>Not found</div>

  return (
    <Menu
      matchedLg={matchedLg}
      foods={data.restaurant?.categories[0].foods}
      categories={data.restaurant.categories.map(category => category.name)}
      location={data.restaurant.name}
    />
  )
}

export default MenuScreen
