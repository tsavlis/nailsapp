import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
const StartupScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>StartupScreen </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default StartupScreen;
