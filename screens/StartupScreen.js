import React from "react";
import { Text, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { SearchBar } from "react-native-elements";

export default class App extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: "90%",
            height: 400,
            backgroundColor: "#eee"
          }}
          source={require("../assets/1145-merrychristmas.json")}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
        <View style={{ width: "90%" }}>
          <SearchBar
            lightTheme
            placeholder="Ψαχνω για..."
            onChangeText={this.updateSearch}
            value={this.state.search}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  }
});
