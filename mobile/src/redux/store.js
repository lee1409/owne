import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import Reactotron from "../../ReactotronConfig"
import rootSaga from "./sagas"
import rootReducer from "./reducers"

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
)

sagaMiddleware.run(rootSaga)

export default store
