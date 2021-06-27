import { SET_USER_INFO } from "../actions/user-action"

const initialState = {
  userToken: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.userData,
      }
    default:
      return state
  }
}
