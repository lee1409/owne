import { FC } from "react"
import { createContext, useReducer, Reducer } from "react"

const initialState = {
  createFoodForm: false,
  foodScreenMenuModal: false,
}

type ActionType = {
  type: "openModal" | "hideModal"
  component: keyof typeof initialState
}

const reducer: Reducer<typeof initialState, ActionType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "openModal":
      return { ...state, [action.component]: true }
    case "hideModal":
      return { ...state, [action.component]: false }
    default:
      return state
  }
}

export const ModalContext = createContext({
  showModal: (component: keyof typeof initialState) => null,
  hideModal: (component: keyof typeof initialState) => null,
  state: initialState,
})

export const ModalProvider: FC = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const showModal = (component: keyof typeof initialState) => {
    dispatch({ type: "openModal", component })
    return null
  }

  const hideModal = (component: keyof typeof initialState) => {
    dispatch({ type: "hideModal", component })
    return null
  }

  return (
    <ModalContext.Provider value={{ showModal, hideModal, state }}>
      {props.children}
    </ModalContext.Provider>
  )
}
