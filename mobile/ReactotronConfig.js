/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from "reactotron-react-native"
import AsyncStorage from "@react-native-community/async-storage"
import { reactotronRedux } from "reactotron-redux"
import sagaPlugin from "reactotron-redux-saga"

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()

export default reactotron
