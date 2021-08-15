import React, { Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { lazy } from "@loadable/component"
import Layout from "../components/Layout"
import ROUTE_NAME from "./routeName"

const Menu = lazy(() => import("../screen/Menu"))
const FoodScreen = lazy(() => import("../screen/Food"))
const Explore = lazy(() => import("../screen/Explore"))
const Page404 = lazy(() => import("../screen/Page404"))

const Router = () => (
  <BrowserRouter basename={ROUTE_NAME.HOME}>
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={ROUTE_NAME.MENU} component={Menu} />
          <Route path={ROUTE_NAME.FOOD} component={FoodScreen} />
          <Route path={ROUTE_NAME.EXPLORE} component={Explore} />
          <Route path={ROUTE_NAME.PAGE_404} component={Page404} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
)

export default Router
