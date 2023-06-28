import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

// API call : "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"

// TO GET THE GEOLOCATION COORDS of our device's location FOR API CALL WE USING EXPO LOCATION PACKAGE :             npx expo install expo-location

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  //const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      setErrorMsg("could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);
  return [loading, errorMsg, weather];
};

// if (weather) {
//   console.log(weather);
// }
