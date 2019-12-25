import React, { Component, useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Button,
  Switch,
  StyleSheet
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Slider, colors } from "react-native-elements";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const ModalScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [setting1, setSetting1] = useState(false);
  const [setting2, setSetting2] = useState(false);
  const [setting3, setSetting3] = useState(false);

  const [slider, setSlider] = useState(15);
  return (
    <View style={styles.screen}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modal}>
          <Text> Up to {Math.round(slider).toFixed(0)} Km Distance </Text>
          <Slider
            value={slider}
            onValueChange={val => setSlider(val)}
            thumbTintColor="gray"
            minimumTrackTintColor={Colors.primaryColor}
            maximumValue={40}
            style={{ width: "90%" }}
          />
          <FilterSwitch
            label="Setting1"
            state={setting1}
            onChange={newValue => setSetting1(newValue)}
          />
          <FilterSwitch
            label="Setting2"
            state={setting2}
            onChange={newValue => setSetting2(newValue)}
          />
          <FilterSwitch
            label="Setting3"
            state={setting3}
            onChange={newValue => setSetting3(newValue)}
          />

          <View style={styles.actions}>
            <View>
              <Button
                color="gray"
                title="Cancel"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <View>
              <Button
                color={Colors.primaryColor}
                title="Apply Filters"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={styles.row}
        // onPress={() => {
        //   Alert.alert(
        //     "Alert Title",
        //     "My Alert Msg",
        //     [
        //       {
        //         text: "Ask me later",
        //         onPress: () => console.log("Ask me later pressed")
        //       },

        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ],
        //     { cancelable: false }
        //   );
        // }}
      >
        <Text style={styles.text}>{props.PartnerResults} total results</Text>
      </View>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.text}>Filters</Text>

        <FontAwesome color={Colors.primaryColor} size={30} name="filter" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 150,
    paddingHorizontal: 10
  },
  modal: {
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 100,
    //   justifyContent: "center",
    alignItems: "center"
  },
  screen: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 8
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    paddingHorizontal: 10,
    fontFamily: "open-sans",
    color: "gray"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20
  }
});

export default ModalScreen;
