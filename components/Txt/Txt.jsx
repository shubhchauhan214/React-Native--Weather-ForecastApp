import { Text, useWindowDimensions } from "react-native";
import {s} from "./Txt.style";
const IPHONE_13_RATIO = 0.0011553697183098591

export function Txt({ children, style, ...restProps }){
    const fontSize = style?.fontSize || s.txt.fontSize
    const {height}= useWindowDimensions();


    return (<Text style={[s.txt, style, {fontSize: Math.round(fontSize * IPHONE_13_RATIO * height) }]}{...restProps}>{children}</Text>);
}