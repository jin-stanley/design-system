import React from "react";
import { AppComponentNavigation } from "../../layout/AppComponentNavigation";
import { Switch, Route } from "react-router-dom";
import { ComponentsRoutesList } from "../../config/componentsRoutes";

const ComponentsView = () => {
  return (
    <>
      <div className="w-1/4 border-r">
        <AppComponentNavigation />
      </div>
      <div className="flex-grow p-6">
        <Switch>
          {ComponentsRoutesList.map((item) => {
            return (
              <Route key={item.path} path={`/components${item.path}`}>
                {item.components}
              </Route>
            );
          })}
        </Switch>
      </div>
    </>
  );
};

export { ComponentsView };
