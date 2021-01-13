import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  padded: {
    paddingVertical: 4,
  },
});

const Stack = ({ children, style }) => {
  return (
    <View style={[style]}>
      {React.Children.map(children, (child) => (
        <View style={styles.padded}>{child}</View>
      ))}
    </View>
  );
};

export default Stack;
