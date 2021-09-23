import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";

type OverrideButtonProps = ButtonProps &
  IconButtonProps & {
    children: React.ReactNode;
  };

const OverrideButton: React.FC<OverrideButtonProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();

  console.log();

  if (typeof children === "string") {
    return (
      <Button
        {...props}
        sx={{
          height: 32,
          borderRadius: 16,
          textTransform: "none",
          boxShadow: "none",
          fontWeight: 600,
          ":hover": {
            boxShadow: "none",
          },
        }}
      >
        {children}
      </Button>
    );
  } else {
    const styledIconButton = () => {
      if (props.variant === "contained") {
        return {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          width: 32,
          height: 32,
          ":hover": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          },
        };
      } else if (props.variant === "outlined") {
        return {
          width: 32,
          height: 32,
          border: `1px solid ${theme.palette.primary.light}`,
        };
      } else {
        return {
          width: 32,
          height: 32,
        };
      }
    };

    return (
      <IconButton
        color={props.color ?? "primary"}
        {...props}
        sx={styledIconButton()}
      >
        {children}
      </IconButton>
    );
  }
};

export default OverrideButton;
