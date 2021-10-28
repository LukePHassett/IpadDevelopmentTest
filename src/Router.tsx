import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import TestPage from "./Pages/TestPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/testpage" component={TestPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
