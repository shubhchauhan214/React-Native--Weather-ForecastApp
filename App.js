import { s } from "./App.style"; /* firstly made a App.style.js file and import it here*/
/* very important and first work of App.js file is to import SafeAreaProvider and SafeAreaView*/
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { ImageBackground } from "react-native"; /*we have to set image in background,isi vjha se ye krre h*/
import backgroundImg from "./assets/background.png"; /*the image we want to set in background,imported here*/

export default function App() {
  return( 
    <ImageBackground style={s.img_background} source={backgroundImg}>
     <SafeAreaProvider>
         <SafeAreaView style={s.container}>
            <Home />
         </SafeAreaView>
     </SafeAreaProvider>
    </ImageBackground>
  );
}

