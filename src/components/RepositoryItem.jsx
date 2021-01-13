import React from "react";
import { View } from "react-native";
import Text from "./Text";

const DISPLAY_PAIRS = [
  ["Full name", "fullName"],
  ["Description", "description"],
  ["Language", "language"],
  ["Stars", "stargazersCount"],
  ["Forks", "forksCount"],
  ["Reviews", "reviewCount"],
  ["Rating", "ratingAverage"],
];

const RepositoryItem = (props) => {
  return (
    <View>
      {DISPLAY_PAIRS.map(([label, key]) => (
        <Text key={key}>
          {label}: {props[key]}
        </Text>
      ))}
    </View>
  );
};

export default RepositoryItem;