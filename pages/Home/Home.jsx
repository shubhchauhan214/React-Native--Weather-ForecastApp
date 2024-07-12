import { View } from "react-native";
import { s } from "./Home.style";
import {Txt} from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-utils";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Home({weather, city, onSubmitSearch}){
  const currentWeather = weather.current_weather
  const currentIntepretation = getWeatherInterpretation(currentWeather.weathercode)
    return(
        <>
          <View style={s.basic}>
            <MeteoBasic 
              dailyWeather={weather.daily}
              city={city}
              interpretation={currentIntepretation} 
              temperature={Math.round(currentWeather.temperature)}
            />
          </View>
          <View style={s.searchbar_container}>
            <SearchBar onSubmit={onSubmitSearch}/>
          </View>
          <View style={s.advanced}>
            <MeteoAdvanced sunrise={weather.daily.sunrise[0].split("T")[1]} sunset={weather.daily.sunset[0].split("T")[1]} windspeed={currentWeather.windspeed} />
          </View>
        </>
    );
}