import { s } from "./SearchBar.style";
import { TextInput } from "react-native";


export function SearchBar({}){
    return <TextInput style={s.input} placeholder="Type a city... Ex: Shamli"/>;
}