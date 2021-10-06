import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = ({ route }) => {
  const { text } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#273c75",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fbc531",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailScreen;
