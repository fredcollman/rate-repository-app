import React from "react";
import Text from "./Text";

const Subheading = ({ children, style }) => {
  return (
    <Text fontSize="subheading" fontWeight="bold" style={style}>
      {children}
    </Text>
  );
};

export default Subheading;
