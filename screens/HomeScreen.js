import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setText(val)}
        value={text}
        placeholder="sayfa ismi giriniz"
      />
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          navigation.navigate("Detail", {
            text: text,
          });
        }}
      >
        <Text style={styles.text}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbc531",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "white",
    backgroundColor: "white",
    width: "75%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  touch: {
    marginTop: 20,
    backgroundColor: "#353b48",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
});

export default HomeScreen;
