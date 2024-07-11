import { View } from "react-native";
import { s } from "./Home.style";
import {Txt} from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-utils";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";

export function Home({weather, city}){
  const currentWeather = weather.current_weather
  const currentIntepretation = getWeatherInterpretation(currentWeather.weathercode)
    return(
        <>
          <View style={s.basic}>
            <MeteoBasic 
              city={city}
              interpretation={currentIntepretation} 
              temperature={Math.round(currentWeather.temperature)}
            />
          </View>
          <View style={s.searchbar}>
            <Txt style={s.txt}>SearchBar</Txt>
          </View>
          <View style={s.advanced}>
            <MeteoAdvanced sunrise={weather.daily.sunrise[0].split("T")[1]} sunset={weather.daily.sunset[0].split("T")[1]} windspeed={currentWeather.windspeed} />
          </View>
        </>
    );
}