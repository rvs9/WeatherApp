import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment/moment";

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { date, item, temp, dateTextWrapper } = styles;

  return (
    <View style={item}>
      <Feather name={"sun"} size={50} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`H:${Math.round(min)}° L:${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 9,
    marginHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "royalblue",
    borderRadius: 9,
    backgroundColor: "royalblue",
  },
  temp: {
    color: "beige",
    fontSize: 20,
  },
  date: {
    color: "beige",
    fontSize: 14,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
