import React from "react";
import { Formik } from "formik";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as yup from "yup";
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

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least ${min} characters"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <Stack style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.button}>
          <Text color="textReverse" fontWeight="bold">
            Sign in
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Stack>
  );
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
