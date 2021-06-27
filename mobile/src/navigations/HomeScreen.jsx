import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Alert, Dimensions } from "react-native"
import { Header } from "react-native-elements"
import Carousel from "react-native-snap-carousel"

const styles = StyleSheet.create({
  carousel_container: {
    backgroundColor: "yellow",
    marginVertical: 15,
    flexGrow: 1,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
})

const HomeScreen = () => {
  const [dimensions] = React.useState({
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
  })

  const renderItem = ({ item }) => (
    <View style={styles.carousel_container}>
      <Text>{item.title}</Text>
    </View>
  )

  return (
    <View>
      <StatusBar style="auto" />
      <Header
        backgroundColor="white"
        centerComponent={<Text>OWNE</Text>}
        rightComponent={{
          icon: "search",
          color: "#FFE27D",
          onPress: () => {
            Alert.alert("Search")
          },
        }}
      />
      <Carousel
        data={[
          {
            title: "Item 1",
            text: "Text 1",
          },
          {
            title: "Item 2",
            text: "Text 2",
          },
        ]}
        renderItem={renderItem}
        itemWidth={dimensions.screenWidth * 0.9}
        sliderWidth={dimensions.screenWidth}
      />
    </View>
  )
}

export default HomeScreen
