import React from "react";

import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "royalblue",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Current Weather"
        //component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming Weather"
        //component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={24}
              color={focused ? "blue" : "black"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        //component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={24} color={focused ? "blue" : "black"} />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
