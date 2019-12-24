import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import PartnerList from "../components/PartnerList";
import DefaultText from "../components/DefaultText";

const CategoryDetails = props => {
  const catId = props.route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const availablePartners = useSelector(state => state.partners.partners);
  const displayedPartners = availablePartners.filter(
    partner => partner.categoryId === catId
  );

  if (displayedPartners.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No Partners found, try another category?</DefaultText>
      </View>
    );
  }

  return (
    <PartnerList listData={displayedPartners} header={selectedCategory.title} />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryDetails;
