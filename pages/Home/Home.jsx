import { View } from "react-native";
import { s } from "./Home.style";
import {Txt} from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-utils";

export function Home({weather}){
  const currentWeather = weather.current_weather
  const currentIntepretation = getWeatherInterpretation(currentWeather.weathercode)
    return(
        <>
          <View style={s.basic}>
            <MeteoBasic 
              interpretation={currentIntepretation} 
              temperature={Math.round(currentWeather.temperature)}
            />
          </View>
          <View style={s.searchbar}>
            <Txt style={s.txt}>SearchBar</Txt>
          </View>
          <View style={s.advanced}>
            <Txt style={s.txt}>Advanced Weather Info</Txt>
          </View>
        </>
    );
}