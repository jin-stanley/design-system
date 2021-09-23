import React from "react";
import { List, ListItem, ListItemButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ComponentsRoutesList } from "../config/componentsRoutes";

const AppComponentNavigation = () => {
  return (
    <List>
      {ComponentsRoutesList.map((item) => {
        return (
          <Link to={`/components${item.path}`}>
            <ListItem>
              <ListItemButton>{item.name}</ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export { AppComponentNavigation };
