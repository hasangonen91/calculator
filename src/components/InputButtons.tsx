import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './Button';
import { Styles } from '../styles/GlobalStyles';
import { myColors } from '../styles/Colors';

export default function InputButtons() {
    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState<Number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber('');
    };

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperation('');
        setResult(null);
    };

    function factorial(num: number): number {
        if (num == 0) return 1
        else return num * factorial(num - 1)
    }

    

    const getResult = () => {
        const first = parseFloat(firstNumber);
        const second = parseFloat(secondNumber);
        if (operation === '+') {
            clear();
            setResult(first + second);

        } else if (operation === '-') {
            clear();
            setResult(first - second);

        } else if (operation === '*') {
            clear();
            setResult(first * second);

        } else if (operation === '/') {
            clear();
            setResult(first / second);

        } else if (operation === '%') {
            clear();
            setResult(first % second);

        } else if (operation === 'x^y') {
            clear();
            setResult(Math.pow(second,first ));

        } else if (operation === 'x^2') {
            clear();
            setResult(Math.pow(first, 2));
            
        } else if (operation === 'x!') {
            clear();
            setResult(factorial(first));
        } else {
            clear();
            setResult(0);

        }
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>; 
        }
        if (firstNumber && firstNumber.length < 6) {
          return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
          return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
              {firstNumber}
            </Text>
          );
        }
        if (firstNumber.length > 7) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
              {firstNumber}
            </Text>
          );
        }
      };

        return (
        <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
            <View style={Styles.row}>
                <Button title="C" isGray onPress={clear} />
                <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Button title="％" isGray onPress={() => handleOperationPress("％")} />
                <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button title="0" onPress={() => handleNumberPress("0")} />
                <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => getResult()} />
            </View>
            <View style={Styles.row}>
              <Button title="x^y" onPress={() => handleOperationPress("x^y")} />
              <Button title="x^2" onPress={() => handleOperationPress("x^2")} />
              <Button title="x!"  onPress={() => handleOperationPress("x!")} />
              <Button title="" onPress={() => handleOperationPress("sin")} />
             </View>

        

        </View>


    );
}


// Language: typescript
// Path: src\components\Button.tsx
