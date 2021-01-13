import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import Subheading from "./Subheading";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgrounds.dark,
    flexDirection: "row",
  },
  text: {
    color: theme.colors.textReverse,
    padding: 16,
  },
});

const AppBarTab = ({ path, children }) => {
  return (
    <Link to={path}>
      <View>
        <Subheading fontSize="subheading" fontWeight="bold" style={styles.text}>
          {children}
        </Subheading>
      </View>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab path="/">Repositories</AppBarTab>
        <AppBarTab path="/login">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
