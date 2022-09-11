import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void,
    title: string,
    isBlue?: boolean,
    isGray?: boolean,
}

export default function Button({title, onPress, isBlue, isGray}:ButtonProps){
    const theme = useContext(ThemeContext);
    {/* TR: butonun rengini ayarlamak icin isBlue ve isGray degiskenlerini kullanıyoruz. Temanin moduna gore dark ya da light butonlarin rengi degismektedir.*/}
    {/* EN: we use the isBlue and isGray variables to set the color of the button. The color of the dark or light buttons changes according to the mode of the theme.*/}
        
    return(
       <TouchableOpacity
            onPress={onPress}
            style={
                isBlue ? Styles.btnBlue 
                : isGray ? Styles.btnGray 
                : theme === 'light' ? Styles.btnLight 
                : Styles.btnDark

            }
            >
            <Text
                style={
                    isBlue || isGray ? Styles.smallTextLight
                    : theme === 'dark' ? Styles.smallTextLight
                    : Styles.smallTextDark
                }>
                {title}
            </Text>

        </TouchableOpacity>

    
    
        );
}