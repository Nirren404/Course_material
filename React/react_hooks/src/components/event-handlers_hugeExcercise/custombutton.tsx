import React from "react";
type CustomButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return <div onClick={onClick}>{label}</div>;
};

export default CustomButton;
