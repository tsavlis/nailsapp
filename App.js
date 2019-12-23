import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppNavigator from "./navigation/MainNavigation";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import partnersReducer from "./store/reducers/partners.reducer";

enableScreens();
const rootReducer = combineReducers({
  partners: partnersReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
