import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View,SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/styles/Colors';
import Button from './src/components/Button';
import InputButtons from './src/components/InputButtons';


export default function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>{/* TR: butun uygulamada temayı cagirmis oluyoruz butun uygulamayi etkilemis olduk */}
                                         {/* EN: we call the theme in the whole application and we have affected the whole application */}
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
    {/*TR: ust view kodu programin dark mod ya da light modunu ayarlamak icin kullaniliyor */} 
    {/*EN: The  view code is used to set the program's dark mode or light mode. */} 
     
       {/* <StatusBar style="auto" />  */}
       <Switch
        value={theme ==='light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark':'light')}
      /> 
      {/*TR: Switch kodu ise ekrandaki gozuken butonun kodunu etkilemektedir dark modu ya acar ya da kapatıyor */}
      {/*EN: The Switch code is the code that affects the code of the button that appears on the screen, it opens or closes the dark mode. */}
    
    <InputButtons/>

    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
