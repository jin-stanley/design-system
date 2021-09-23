import React from "react";
import Button from "../../../components/Button";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ButtonView = () => {
  return (
    <div>
      <Button variant="contained" startIcon={<FiChevronDown size={12} />}>
        Primary
      </Button>
      <Button variant="contained" endIcon={<FiChevronUp size={12} />}>
        Primary
      </Button>
      <Button variant="contained">
        <FiChevronDown />
      </Button>
      <Button variant="outlined">
        <FiChevronDown />
      </Button>
      <Button>
        <FiChevronDown />
      </Button>
      <Button variant="outlined">Primary</Button>
      <Button variant="text">Primary</Button>
    </div>
  );
};

export { ButtonView };
