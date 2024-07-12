import { s } from "./SearchBar.style";
import { TextInput } from "react-native";


export function SearchBar({onSubmit}){
    return( 
      <TextInput 
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)} 
      style={s.input} 
      placeholder="Type a city... Ex: Shamli"
      />
    );
}