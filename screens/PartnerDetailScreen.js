import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import DefaultText from "../components/DefaultText";
import { Ionicons } from "@expo/vector-icons";
import { CATEGORIES } from "../data/dummy-data";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const PartnerDetailScreen = props => {
  const availablePartners = useSelector(state => state.partners.partners);
  const partnerId = props.route.params.partnerId;
  // const currentMealIsFavorite = useSelector(state =>
  //   state.meals.favoriteMeals.some(meal => meal.id === mealId)
  // );
  const selectedPartner = availablePartners.find(
    partner => partner.id === partnerId
  );
  // const dispatch = useDispatch();

  // const toggleFavoriteHandler = useCallback(() => {
  //   dispatch(toggleFavorite(mealId));
  // }, [dispatch, mealId]);

  // useEffect(() => {
  //   // props.navigation.setParams({ mealTitle: selectedPartner.title });
  //   props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  // }, [toggleFavoriteHandler]);

  // useEffect(() => {
  //   props.navigation.setParams({ isFav: currentMealIsFavorite });
  // }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedPartner.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedPartner.firstName}</DefaultText>
        <DefaultText>{selectedPartner.lastName.toUpperCase()}</DefaultText>
        <DefaultText>{selectedPartner.area.toUpperCase()}</DefaultText>
      </View>
      {/* <Text style={styles.title}>Rating</Text>
      {selectedPartner.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedPartner.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))} */}
    </ScrollView>
  );
};

PartnerDetailScreen.navigationOptions = navigationData => {
  const catId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerRight: (
      <Ionicons
        title="md-home"
        name={"md-home"}
        onPress={() => {
          navigationData.navigation.popToTop();
        }}
        color="white"
        size={26}
      />
    ),
    headerRightContainerStyle: { marginRight: 20 }
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});

export default PartnerDetailScreen;
