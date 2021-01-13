import React from "react";
import { Formik } from "formik";
import { TouchableWithoutFeedback, View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";

const BodyMassIndexForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="mass" placeholder="Weight (kg)" />
      <FormikTextInput name="height" placeholder="Height (m)" />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text>Calculate</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{ mass: "", height: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
