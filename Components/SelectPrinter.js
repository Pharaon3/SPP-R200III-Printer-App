import { Linking, StyleSheet, Text, View, StatusBar, Switch } from 'react-native';
import { Button, Image } from 'react-native';
import React, {useState} from 'react';

export default function SelectPrinter() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" />
      {/* Header */}
      <View style={styles.headerBackground}>
        <Image
          style={styles.image}
          source={require('../assets/image/back_arrow_02.png')}
        />
        <Text style={styles.headerText}> Select the Printer </Text>
      </View>
      <View style={styles.bluetooth}>
        <View style = {styles.bluetoothText}>
          <Image
            style={styles.image}
            source={require('../assets/image/bluetooth04.png')}
          />
          <Text> Bluetooth </Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style = {styles.button}>
        <Button title = 'O K'  style = {styles.button}/> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  button: {
    color: '#ee6809',
    fontSize: 40,
    fontStyle: 'bold',
    margin: 10,
    width: '80%',
    height: 100,
    marginTop: '120%',
  },
  headerBackground: {
    width: '100%',
    height: 60,
    backgroundColor: '#ee6809',
    // alignItems: 'end',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 2,
  },
  bluetooth: {
    height: 100,
    justifyContent: 'space-between',
    width: '90%',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    borderWidth: 3,
  },
  bluetoothText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 2,
  },
});
