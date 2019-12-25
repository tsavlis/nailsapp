import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/partners.action";
import Colors from "../constants/Colors";
import { Rating, AirbnbRating } from "react-native-elements";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText style={{}}>{props.children}</DefaultText>
    </View>
  );
};

const PartnerDetailScreen = props => {
  const { navigation, route } = props;

  const availablePartners = useSelector(state => state.partners.partners);
  const partnerId = props.route.params.partnerId;
  const currentPartnerisFavorite = useSelector(state =>
    state.partners.favoritePartners.some(partner => partner.id === partnerId)
  );
  const selectedPartner = availablePartners.find(
    partner => partner.id === partnerId
  );
  const dispatch = useDispatch();
  const toggleFavHandle = useCallback(() => {
    dispatch(toggleFavorite(partnerId));
  }, [dispatch, partnerId]);

  useEffect(() => {
    navigation.setParams({
      handler: toggleFavHandle
    });
  }, [toggleFavHandle]);
  useEffect(() => {
    navigation.setParams({
      favs: currentPartnerisFavorite
    });
  }, [currentPartnerisFavorite]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Image source={{ uri: selectedPartner.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedPartner.firstName}</DefaultText>
        <DefaultText>{selectedPartner.lastName.toUpperCase()}</DefaultText>
        <DefaultText>{selectedPartner.area.toUpperCase()}</DefaultText>
      </View>

      <Text style={styles.title}>Υπηρεσίες</Text>
      {selectedPartner.ingredients
        ? selectedPartner.ingredients.map(ingredient => (
            <ListItem key={ingredient.price}>
              {ingredient.title} {ingredient.price}$
            </ListItem>
          ))
        : null}
      <Text style={styles.title}>Αξιολογήσεις</Text>
      <AirbnbRating count={5} defaultRating={5} size={20} />

      {/* {selectedPartner.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white"
  },
  screen: {
    backgroundColor: "white"
  },
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
    textAlign: "center",
    marginVertical: 20
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10
  }
});

export default PartnerDetailScreen;
