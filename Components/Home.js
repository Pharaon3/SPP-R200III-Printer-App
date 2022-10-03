import { Linking, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Button, Image } from 'react-native';
import React, {useState} from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Select Printer */}
      <View style={styles.selPrinter} >
        <Image style = {styles.warningImage} source = {require('../assets/image/warning1.png')} />
        <Text style = {styles.selPrinterText}> Select the Printer </Text>
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
          source={require('../assets/image/txt-file-icon.png')}
        />
        <Text> Text </Text>
      </View>
      <View style={styles.category}>
        <Image
          style={styles.image}
          source={require('../assets/image/repairing-service.png')}
        />
        <Text> Settings </Text>
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
  text: {
    color: '#000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  },
  headerBackground: {
    width: '100%',
    height: 40,
    backgroundColor: '#ee6809',
    // alignItems: 'end',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
  category: {
    height: 100,
    // justifyContent: 'center',
    width: '90%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#f55',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  selPrinter: {
    height: 40,
    justifyContent: 'center',
    width: '60%',
    backgroundColor: '#ee6809',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#f55',
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  warningImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  selPrinterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


