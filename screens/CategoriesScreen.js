import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
  return (
    <React.Fragment>
      <View style={styles.screen}>
        {CATEGORIES.map(item => {
          return (
            <CategoryGridTile
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              navigation={props.navigation}
              onSelect={() => {
                props.navigation.navigate("Details", {
                  categoryId: item.id,
                  categoryTitle: item.title
                });
              }}
            />
          );
        })}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "lightgray",
    paddingTop: StatusBar.currentHeight
  }
});

export default CategoriesScreen;
