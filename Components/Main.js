import { Linking, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, Image } from 'react-native';
import React, {useState} from 'react';

export default function Main() {
  const [name, setName] = useState('Style Test');
  const onclickHandler = () => {
    setName('Style Test is Done!')
  }
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#71ffff" />
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}> mPrint </Text>
      </View>
      <View style={styles.category}>
        <Image
          style={styles.image}
          source={require('../assets/image/image.png')}
        />
        <Text> Image </Text>
      </View>
      <View style={styles.category}>
        <Image
          style={styles.image}
          source={require('../assets/image/pdf.png')}
        />
        <Text> PDF </Text>
      </View>
      <View style={styles.category}>
        <Image
          style={styles.image}
          source={require('../assets/image/repairing-service.png')}
        />
        <Text> Setting </Text>
      </View>
      <Text style = {styles.text}> {name} </Text>
      <Button title = 'What is my name?' onPress={onclickHandler}> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#bbb',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  },
  headerBackground: {
    width: '100%',
    height: 40,
    backgroundColor: '#c43',
    // alignItems: 'end',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 12,
  },
  category: {
    height: 100,
    // justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#f55',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
  }
});
