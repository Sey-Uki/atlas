import React from "react";
import { Route, Switch } from "react-router";
import { HomePage } from "../../containers/HomePage/HomePage";
import { Skeleton } from "../../containers/Skeleton/Skeleton";
import { Heart } from "../../containers/Heart/Heart";
import { Skull } from "../../containers/Skeleton/Skull/Skull";
import { Digestion } from "../../containers/Digestion/Digestion";
import { Nerves } from "../../containers/Nerves/Nerves";
import { Muscles } from "../../containers/Muscles/Muscles";
import { Breathing } from "../../containers/Breathing/Breathing";
import { About } from "../../containers/About/About";

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
      <Route exact path="/skull"> 
        <Skull />
      </Route>
      <Route exact path="/digestion">
        <Digestion />
      </Route>
      <Route exact path="/nerves">
        <Nerves />
      </Route>
      <Route exact path="/muscles">
        <Muscles />
      </Route>
      <Route exact path="/breathing">
        <Breathing />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );
};
