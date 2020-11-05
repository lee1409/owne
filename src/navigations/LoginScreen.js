import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import firebase from "firebase";
import * as Facebook from "expo-facebook";

const LoginScreen = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const signup = () => {
    const { email, password } = formik.values;
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const login = () => {
    const { email, password } = formik.values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => console.log(resp));
  };

  const facebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: process.env.FB_APP_ID,
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });

      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase.auth().signInWithCredential(credential);
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <Input
        placeholder="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
      />
      <Text>Password</Text>
      <Input
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      <Button title="Login" onPress={login} />
      <Button title="Sign Up" type="outline" onPress={signup} />
      <Button
        title="Login with Facebook"
        type="outline"
        onPress={facebookLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginScreen;
