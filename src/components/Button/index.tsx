import React from "react";

interface IProps {
  label: string;
}

export const Button: React.FC<IProps> = ({ label }) => {
  return <button>{label}</button>;
};

Button.defaultProps = {
  label: "Default",
};
