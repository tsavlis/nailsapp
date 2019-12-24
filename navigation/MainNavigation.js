import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import StartupScreen from "../screens/StartupScreen";
import AuthScreen from "../screens/AuthScreen";
import CategoryDetails from "../screens/CategoryDetails";
import CategoriesScreen from "../screens/CategoriesScreen";
import PartnerDetailScreen from "../screens/PartnerDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
function getHeaderTitle(route) {
  const routeName = route.params ? route.params.categoryTitle : "Categories";
  return routeName;
}

const CategoriesStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      headerMode="float"
      animation="fade"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerStyle: { backgroundColor: Colors.accent },
        //headerTintColor: "#fff"
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans"
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Details"
        component={CategoryDetails}
        options={({ route }) => ({
          title: "Select A Partner"
          // headerShown: shouldheaderBeShown(route)
        })}
      />
      <Stack.Screen
        name="PartnerDetailScreen"
        component={PartnerDetailScreen}
        options={({ route }) => ({
          title: "Partner Details",
          headerRight: () => (
            <Ionicons
              size={23}
              color={"white"}
              name={route.params.favs ? "ios-star-outline" : "ios-star"}
              onPress={() => {
                route.params.handler();
              }}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 20
          }
          // headerShown: shouldheaderBeShown(route)
        })}
      />
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#fff",
      // showLabel: false,
      activeBackgroundColor: Colors.primaryColor,
      inactiveBackgroundColor: Colors.accentColor,
      activeTintColor: Colors.accentColor,
      inactiveTintColor: Colors.primaryColor,
      labelStyle: { paddingBottom: 3 }
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Categories") {
          iconName = "ios-list";
        } else if (route.name === "Favorites") {
          iconName = "ios-star";
        } else if (route.name === "Profile") {
          iconName = "ios-person";
        } else if (route.name === "Search") {
          iconName = "ios-search";
        }
        return <Ionicons name={iconName} size={23} color={color} />;
      }
    })}
    initialRouteName="Search"
  >
    <Tab.Screen name="Search" component={StartupScreen} />
    <Tab.Screen name="Categories" component={CategoriesStack} />
    <Tab.Screen name="Favorites" component={FavoriteStackNav} />
    <Tab.Screen name="Profile" component={AuthScreen} />
  </Tab.Navigator>
);

const FavoriteStackNav = ({ navigation, route }) => {
  return (
    <FavoriteStack.Navigator
      headerMode="float"
      animation="fade"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerStyle: { backgroundColor: Colors.accent },
        //headerTintColor: "#fff"
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans"
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor
      }}
    >
      <FavoriteStack.Screen name="Favorites" component={FavoritesScreen} />
      <FavoriteStack.Screen
        name="PartnerDetailScreen"
        component={PartnerDetailScreen}
        options={({ route }) => ({
          title: getHeaderTitle(route),
          headerTitleStyle: { maxWidth: 300, fontFamily: "open-sans" },
          headerRight: () => (
            <Ionicons
              size={23}
              color={"white"}
              name={route.params.favs ? "ios-star-outline" : "ios-star"}
              onPress={() => {
                route.params.handler();
              }}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 20
          }
          // headerShown: shouldheaderBeShown(route)
        })}
      />
    </FavoriteStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationNativeContainer>
      <AppStack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={({ route }) => ({
            headerShown: false
            // title: getHeaderTitle(route),
            //  headerShown: shouldheaderBeShown(route)
          })}
        />
      </AppStack.Navigator>
    </NavigationNativeContainer>
  );
};

export default AppNavigator;
