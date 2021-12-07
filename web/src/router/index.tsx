import { Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { lazy } from "@loadable/component"
import ROUTE_NAME from "./routeName"

const MenuScreen = lazy(() => import("../screen/Menu"))
const MenuDetailScreen = lazy(() => import("../screen/MenuDetail"))
const FoodScreen = lazy(() => import("../screen/Food"))
const Home = lazy(() => import("../screen/Home"))
const Page404 = lazy(() => import("../screen/Page404"))

const Router = () => (
  <BrowserRouter basename={ROUTE_NAME.HOME}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={ROUTE_NAME.MENU} component={MenuScreen} />
        <Route path={ROUTE_NAME.MENU_DETAIL} component={MenuDetailScreen} />
        <Route path={ROUTE_NAME.FOOD} component={FoodScreen} />
        <Route path={ROUTE_NAME.HOME} component={Home} />
        <Route path={ROUTE_NAME.PAGE_404} component={Page404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Router
