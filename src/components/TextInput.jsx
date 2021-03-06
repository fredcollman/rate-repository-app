import React from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderColor: theme.backgrounds.subtle,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
