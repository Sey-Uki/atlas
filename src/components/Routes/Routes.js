import React from "react";
import { Route, Switch } from "react-router";
import { HomePage } from "../../containers/HomePage/HomePage";
import { Skeleton } from "../../containers/Skeleton/Skeleton";
import { Heart } from "../../containers/Heart/Heart";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/skeleton">
        <Skeleton />
      </Route>
      <Route exact path="/heart">
        <Heart />
      </Route>
    </Switch>
  );
};
