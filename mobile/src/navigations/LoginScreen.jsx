import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useFirebase } from "react-redux-firebase"
import { Text, View, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"
import { useFormik } from "formik"
import * as Facebook from "expo-facebook"

import { SIGNUP } from "../redux/actions/user-action"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
})

const LoginScreen = ({ onSignup }) => {
  const firebase = useFirebase()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  })

  const signup = () => {
    const { email, password } = formik.values
    firebase.auth().createUserWithEmailAndPassword(email, password)
    onSignup({ email, password })
  }

  const login = () => {
    // const { email, password } = formik.values;
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((resp) => console.log(resp));
  }

  const facebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: process.env.FB_APP_ID,
      })
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      })

      if (type === "success") {
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        firebase.auth().signInWithCredential(credential)
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`)
    }
  }

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
  )
}

LoginScreen.propTypes = {
  onSignup: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  onSignup: payload => dispatch({ type: SIGNUP, data: payload }),
})

export default connect(null, mapDispatchToProps)(LoginScreen)
