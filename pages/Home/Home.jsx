import { Text, View } from "react-native";
import { s } from "./Home.style";

export function Home(){
    return(
        <>
          <View style={s.basic}>
            <Text>Basic Weather Info</Text>
          </View>
          <View style={s.searchbar}>
            <Text>SearchBar</Text>
          </View>
          <View style={s.advanced}>
            <Text>Advanced Weather Info</Text>
          </View>
        </>
    );
}