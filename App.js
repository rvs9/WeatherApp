import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, errorMsg, weather] = useGetWeather();
  console.log(weather);
  if (weather) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View styles={styles.container}>
      <ActivityIndicator style={styles.actIndi} size={"large"} color={"blue"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    flex: 1,
  },
  actIndi: {
    alignItems: "center",
  },
});

export default App;
