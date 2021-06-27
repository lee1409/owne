import { combineReducers } from "redux"
import { firebaseReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

import UserReducer from "./user-reducer"

export default combineReducers({
  UserReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})
