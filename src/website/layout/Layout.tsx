import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppTopBar } from "./AppTopBar";
import { ComponentsView } from "../views/components";
import { ColorsView } from "../views/colors";

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <AppTopBar />
      <div className="flex flex-grow">
        <Switch>
          <Route path="/components">
            <ComponentsView />
          </Route>
          <Route path="/colors">
            <ColorsView />
          </Route>
          {/*  */}
        </Switch>
      </div>
    </div>
  );
};

export { Layout };
