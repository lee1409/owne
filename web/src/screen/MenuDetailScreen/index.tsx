import Menu from "../../components/Menu"
import { useMediaQueryUp } from "../../utils/hook"
import { useGetMenu } from "../../api/models/menu"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';



function MenuDetailScreen(): JSX.Element | null {
  const matchedLg = useMediaQueryUp("lg")
  const {slug} = useParams();
  // todo change sample
  const { data, loading } = useGetMenu(slug);

  useEffect(() => {
    // Get the current location
    // Just get the params



    if (navigator) {
      navigator.geolocation.getCurrentPosition(() => {
        // Todo
        // Pass the location to Google Location API
        // Then get the restaurant menu based on the name
      })
    }



  }, []);



  if (loading) return null
  else if (!data?.restaurant?.categories) return <div style={{display: "grid", placeItems: 'center'}}>Not found</div>

  return (
    <Menu
      matchedLg={matchedLg}
      foods={data.restaurant?.categories[0].foods}
      categories={data.restaurant.categories.map(category => category.name)}
      location={data.restaurant.name}
    />
  )
}

export default MenuDetailScreen
