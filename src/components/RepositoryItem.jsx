import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import Subheading from "./Subheading";
import Stack from "./Stack";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    maxWidth: 400,
    backgroundColor: theme.backgrounds.light,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginEnd: 16,
  },
  media: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
  },
  pill: {
    backgroundColor: theme.backgrounds.primary,
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 4,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  centerText: {
    textAlign: "center",
  },
  wrap: {
    flex: 1,
  },
});

const formatBigNumber = (number) =>
  number >= 1000 ? `${(number / 1000).toFixed(1)}k` : `${number}`;

const Media = (props) => (
  <View style={styles.media}>
    <Image style={styles.avatar} source={{ uri: props.ownerAvatarUrl }} />
    <Stack style={styles.wrap}>
      <Subheading>{props.fullName}</Subheading>
      <Text color="textSecondary">{props.description}</Text>
      <View style={styles.pill}>
        <Text color="textReverse">{props.language}</Text>
      </View>
    </Stack>
  </View>
);

const StatItem = ({ label, value }) => {
  return (
    <View>
      <Stack>
        <Text fontWeight="bold" style={styles.centerText}>
          {formatBigNumber(value)}
        </Text>
        <Text color="textSecondary" style={styles.centerText}>
          {label}
        </Text>
      </Stack>
    </View>
  );
};

const Stats = (props) => {
  return (
    <View style={styles.stats}>
      <StatItem label="Stars" value={props.stargazersCount} />
      <StatItem label="Forks" value={props.forksCount} />
      <StatItem label="Reviews" value={props.reviewCount} />
      <StatItem label="Rating" value={props.ratingAverage} />
    </View>
  );
};

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <Stack>
        <Media {...props} />
        <Stats {...props} />
      </Stack>
    </View>
  );
};

export default RepositoryItem;
