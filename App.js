import { s } from "./App.style"; /* firstly made a App.style.js file and import it here*/
/* very important and first work of App.js file is to import SafeAreaProvider and SafeAreaView*/
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { ImageBackground } from "react-native"; /*we have to set image in background,isi vjha se ye krre h*/
import backgroundImg from "./assets/background.png"; /*the image we want to set in background,imported here*/
import { useEffect, useState } from "react";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";

export default function App() {
  const[coordinates, setCoordinates] = useState();
  const[weather, setWeather] = useState();

  const[isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });
  console.log(isFontLoaded);


  useEffect(()=>{
    getUserCoordinates();
  },[]);

  useEffect(()=>{
    if(coordinates){
      fetchWeatherByCoords(coordinates)
      
    }
  },[coordinates]);


  async function fetchWeatherByCoords(coords){
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }


  /* Request for getting user coordinates*/
  async function getUserCoordinates(){
    const {status} = await requestForegroundPermissionsAsync()
    if(status==="granted"){
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    }else{
      setCoordinates({lat: "29.45", lng: "77.31"});
    }
  }

  return( 
    <ImageBackground imageStyle={s.img} style={s.img_background} source={backgroundImg}>
     <SafeAreaProvider>
         <SafeAreaView style={s.container}>
            {isFontLoaded && weather && <Home weather={weather} />}
         </SafeAreaView>
     </SafeAreaProvider>
    </ImageBackground>
  );
}

