import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.background,
    // ...
  },
  text: {
    color: theme.colors.textReverse,
    padding: 20,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log("touched")}>
      <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
        {children}
      </Text>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;