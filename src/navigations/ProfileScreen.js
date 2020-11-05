import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import firebase from "firebase";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <StatusBar style="auto" />
      <Button
        title="Logout"
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              console.log('Logout successful.');
            })
            .catch((err) => {
              console.log(`Firebase Logout Error: ${err.message}`);
            });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
