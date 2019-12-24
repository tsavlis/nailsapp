import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import PartnerList from "../components/PartnerList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = props => {
  const favPartns = useSelector(state => state.partners.favoritePartners);
  console.log(favPartns);
  if (favPartns.length === 0 || !favPartns) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favorite Partners found. Start adding some!
        </DefaultText>
      </View>
    );
  }

  return <PartnerList listData={favPartns} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesScreen;
