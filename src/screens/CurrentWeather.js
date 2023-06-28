import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    bodyWrapper,
    container,
    description,
    feels,
    image,
    message,
    tempStyles,
    tempRange,
    tempRangeWrapper,
    wrapper,
    feather,
  } = styles; 

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      {/* <ImageBackground
        source={require("../../assets/blue-sky.jpg")}
        style={image}
      > */}
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={90}
          color="white"
          style={feather}
        />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feeels like ${feels_like}`}</Text>

        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={tempRangeWrapper}
          messageOneStyles={tempRange}
          messageTwoStyles={tempRange}
        />
        <RowText
          messageOne={weatherData.weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  tempRangeWrapper: {
    flexDirection: "row",
  },
  tempRange: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    paddingLeft: 25,
    marginBottom: 40,
    marginTop: 90,
  },
  description: {
    fontSize: 48,
    color: "white",
  },
  message: {
    fontSize: 24,
    marginRight: 18,
  },
  image: {
    flex: 1,
  },
  feather: {
    paddingBottom: 18,
  },
});

export default CurrentWeather;
