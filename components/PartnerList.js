import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import PartnerItem from "./PartnerItem";

const PartnerList = props => {
  //const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const renderParnterItem = itemData => {
    return (
      <PartnerItem
        rating={itemData.item.rating}
        imageUrl={itemData.item.imageUrl}
        firstName={itemData.item.firstName}
        lastName={itemData.item.lastName}
        area={itemData.item.area}
        onSelectPartner={() => {
          props.navigation.navigate("PartnerDetailScreen", {
            partnerId: itemData.item.id,
            categoryId: itemData.item.categoryId,
            categoryTitle: props.header
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderParnterItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default PartnerList;
