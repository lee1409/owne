import React, { Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { lazy } from "@loadable/component"

const Menu = lazy(() => import("./screen/Menu"))

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Switch>
        <Route component={Menu} />
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default Router
