import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const AuthScreen = props => {
  const partners = useSelector(state => state.partners);
  return (
    <View style={styles.screen}>
      <Text>AuthScreen </Text>
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
export default AuthScreen;
