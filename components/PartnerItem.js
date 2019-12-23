import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import DefaultText from "./DefaultText";

const PartnerItem = props => {
  return (
    <View style={styles.partnerItem}>
      <TouchableOpacity onPress={props.onSelectPartner}>
        <View>
          <View style={{ ...styles.partnerRow, ...styles.partnerHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.rating} Stars
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.partnerRow, ...styles.partnerDetail }}>
            <DefaultText>{props.lastName}</DefaultText>
            <DefaultText>{props.firstName.toUpperCase()}</DefaultText>
            <DefaultText>{props.area.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  partnerItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  partnerRow: {
    flexDirection: "row"
  },
  partnerHeader: {
    height: "85%"
  },
  partnerDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});

export default PartnerItem;
