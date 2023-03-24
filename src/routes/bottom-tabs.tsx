import {
    View,
    Text,
    Button,
    TouchableOpacity,
    StyleSheet,
    Image,
  } from "react-native";
  import React from "react";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
  import { Donations, Home, Posts, PreachPlace } from "../screens";
import { NavigatorScreenParams } from "@react-navigation/native";
import { Content, ContentStackParams } from "./content";
  
  export type BottomTabParams = {
    Início: undefined;
    Púlpito: undefined;
    Conteúdo: NavigatorScreenParams<ContentStackParams>
  }

  const Tab = createBottomTabNavigator<BottomTabParams>();

  type MaterialIconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  let iconName: MaterialIconName;

  export const Routes = () => (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }: any) => {
          if (route.name === "Início") {
            iconName = focused ? "home-variant" : "home-variant-outline";
          } else if (route.name === "Conteúdo") {
            iconName = focused ? "bookshelf" : "bookshelf";
          } else if (route.name === "Doações") {
            iconName = focused ? "cards-heart" : "cards-heart-outline";
          } else if (route.name === "Púlpito") {
            iconName = focused ? "microphone" : "microphone";
          }
  
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              // Do something
            }}
            style={{ paddingRight: 20 }}
          >
            <Ionicons name="ios-person-circle-outline" size={32} color="gray" />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              // Do something
            }}
            style={{ paddingLeft: 20 }}
          >
            <Image style={styles.logo} source={require("../../assets/logo.png")} />
          </TouchableOpacity>
        ),
        tabBarActiveTintColor: "#E21F2C",
        tabBarInactiveTintColor: "gray",
        headerStyle: { height: 80 },
        headerTitleStyle: { fontSize: 18 },
      })}
    >
      <Tab.Screen name="Início" component={Posts} />
      <Tab.Screen name="Conteúdo" component={Content} />
      <Tab.Screen name="Púlpito" component={PreachPlace} />
      {/* <Tab.Screen name="Doações" component={Donations} /> */}
    </Tab.Navigator>
  );
  
  const styles = StyleSheet.create({
    logo: {
      width: 30,
      height: 42,
    },
  });