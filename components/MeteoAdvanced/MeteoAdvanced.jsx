import { StyledContainer, StyledLabel, s , StyledValue} from "./MeteoAdvanced.style";
import { View } from "react-native";
import { Txt } from "../Txt/Txt";

export function MeteoAdvanced({sunrise, sunset, windspeed}){
    return (<View style={s.container}>
        <StyledContainer>
            <StyledLabel>{sunrise}</StyledLabel>
            <StyledValue>Sunrise</StyledValue>
        </StyledContainer>
        <StyledContainer>
            <StyledLabel>{sunset}</StyledLabel>
            <StyledValue>Sunset</StyledValue>
        </StyledContainer>
        <StyledContainer>
            <StyledLabel>{windspeed} km/h</StyledLabel>
            <StyledValue>Windspeed</StyledValue>
        </StyledContainer>
    </View>
    );
}