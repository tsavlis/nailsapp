import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
  View,
  Dimensions,
  Image
} from "react-native";
import Card from "./Card";
const SCREEN_HEIGHT = Math.round(Dimensions.get("window").height);
const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={{ ...styles.screen, ...props.style }}>
      <View>
        <TouchableCmp onPress={props.onSelect}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={{ ...styles.container }}
          >
            <Text style={styles.title}>{props.title}</Text>
          </ImageBackground>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  touchable: {
    overflow: "hidden",
    borderRadius: 10
  },

  screen: { width: "90%", height: SCREEN_HEIGHT / 3.5 },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 32,
    padding: 10,
    color: "white",
    textAlign: "right"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default CategoryGridTile;
