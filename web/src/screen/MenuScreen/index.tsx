import Menu from "../../components/Menu"
import { useMediaQueryUp } from "../../utils/hook"
import { useGetMenu } from "../../api/models/menu"

export default function MenuScreen() {
  const matchedLg = useMediaQueryUp("lg")
  const { data, loading } = useGetMenu()

  if (loading) return <div>Loading</div>

  return (
    <Menu
      matchedLg={matchedLg}
      list={data.restaurant.categories.foods}
      location={data.restaurant.name}
    />
  )
}
