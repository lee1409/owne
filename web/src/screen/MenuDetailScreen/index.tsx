import MenuDetail from "../../components/MenuDetail"
import { useMediaQueryUp } from "../../utils/hook"
import { useGetMenu } from "../../api/models/menu"
import { Redirect, useParams } from "react-router-dom"

function MenuDetailScreen(): JSX.Element {
  const matchedLg = useMediaQueryUp("lg")
  const { slug } = useParams<{ slug: string }>()
  const { data, loading } = useGetMenu(slug)

  console.log(data)
  if (loading) return <div></div>
  else if (!data?.restaurants.length) return <Redirect to={"/menu"}></Redirect>
  else if (data.restaurants[0].categories.length === 0)
    return <div>There's something wrong occurred</div>

  return (
    <MenuDetail
      matchedLg={matchedLg}
      foods={data.restaurants[0].categories[0].foods}
      categories={data.restaurants[0].categories.map(category => category.name)}
      location={data.restaurants[0].name}
    />
  )
}

export default MenuDetailScreen
