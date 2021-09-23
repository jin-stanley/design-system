import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useHistory } from "react-router-dom";

interface LinkTabProps {
  label?: string;
  href?: string;
}

const LinkTab = (props: LinkTabProps) => {
  const history = useHistory();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        history.push(event.currentTarget.pathname);
      }}
      {...props}
    />
  );
};

const AppTopBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <div className="flex items-center">
        <div className="p-4">Design System</div>
        <div className="">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="standard"
          >
            <LinkTab label="Components" href="/components" />
            <LinkTab label="Colors" href="/colors" />
          </Tabs>
        </div>
      </div>
    </AppBar>
  );
};

export { AppTopBar };
