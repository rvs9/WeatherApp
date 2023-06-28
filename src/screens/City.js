import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const City = ({weatherData}) => {
  const {
    container,
    imageLayout,
    cityText,
    cityName,
    countryName, 
    popuationText,
    populationWrapper,
    sunText,
    sunWrapper,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city.jpg")}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>Agra</Text>
        <Text style={[cityText, countryName]}>India</Text>
        <View style={populationWrapper}>
          <Feather name="users" size={36} color="red" />
          <Text style={popuationText}>3627924</Text>
        </View>
        <View style={sunWrapper}>
          <Feather name="sunrise" size={42} color="orange" />
          <Text style={sunText}>10:46:58</Text>
          <Feather name="sunset" size={42} color="orange" />
          <Text style={sunText}>18:28:14</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  cityName: {
    marginTop: 27,
    fontSize: 40,
  },
  countryName: {
    fontSize: 32,
  },
  populationWrapper: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  popuationText: {
    fontSize: 24,
    marginLeft: 7.2,
    color: "beige",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  sunWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  sunText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
