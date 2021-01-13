import React from "react";
import { Formik } from "formik";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Text from "./Text";
import Stack from "./Stack";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    maxWidth: 400,
    backgroundColor: theme.backgrounds.light,
  },
  button: {
    backgroundColor: theme.backgrounds.primary,
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <Stack style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <View style={styles.button}>
        <TouchableWithoutFeedback onPress={onSubmit}>
          <Text color="textReverse" fontWeight="bold">
            Sign in
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Stack>
  );
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
