import { Text, View } from "react-native";
import { s } from "./Home.style";

export function Home(){
    return(
        <>
          <View style={s.basic}>
            <Text style={s.txt}>Basic Weather Info</Text>
          </View>
          <View style={s.searchbar}>
            <Text style={s.txt}>SearchBar</Text>
          </View>
          <View style={s.advanced}>
            <Text style={s.txt}>Advanced Weather Info</Text>
          </View>
        </>
    );
}