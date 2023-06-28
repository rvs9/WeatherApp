import { FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import ListItem from "../components/ListItem";

// const DATA = [
//   {
//     dt: "2023-06-09 12:00:00",
//     main: {
//       temp_min: 6.93,
//       temp_max: 9.42,
//     },
//     weather: [
//       {
//         main: "light rain",
//       },
//     ],
//   },
//   {
//     dt: "2023-06-09 15:00:00",
//     main: {
//       temp_min: 2.24,
//       temp_max: 7.08,
//     },
//     weather: [
//       {
//         main: "overcast clouds",
//       },
//     ],
//   },
//   {
//     dt: "2023-06-09 18:00:00",
//     main: {
//       temp_min: 1.54,
//       temp_max: 9.72,
//     },
//     weather: [
//       {
//         main: "Hail Storm",
//       },
//     ],
//   },
// ];

const UpcomingWeather = ({ weatherData }) => {
  const render_Item = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        //style={}
        data={weatherData}
        renderItem={render_Item}
        keyExtractor={(item) => item.dt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "darkgrey",
  },
});

export default UpcomingWeather;
