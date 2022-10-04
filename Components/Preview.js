import { Linking, StyleSheet, Text, View, StatusBar, Switch } from 'react-native';
import { Button, Image, TouchableHighlight, ScrollView } from 'react-native';
import React, {useState} from 'react';
import * as DocumentPicker from 'expo-document-picker';

export default function Preview() {
  const [copyNum, setCopyNum] = useState(1);
  const [file, setFile] = useState(null);
  const pickFile = async () => {
	const result = await DocumentPicker.getDocumentAsync({
		type: "application/*"
	});

	if (!result.cancelled) {
		setFile(result.name);
	}
  }
  const settings = () => {
	
  }
  const print = () => {
	
  }
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#000" />
      {/* Header */}
      <View style={styles.headerBackground}>
        <Image
          style={styles.image}
          source={require('../assets/image/back_arrow_02.png')}
        />
        <Text style={styles.headerText}> Preview </Text>
      </View>
      {/* Copies */}
	  <View style={styles.copies}>
		<Text style = {styles.text}> Copies: {copyNum} </Text>
		<View style = {styles.copyNumBtn}>
			<TouchableHighlight
			  activeOpacity={1}
			  underlayColor="#DDDDDD"
			  onPress={() => {setCopyNum(copyNum - 1)}}>
			  <Image
				style={styles.copyNumChangeBtn}
				source={require('../assets/image/si-glyph-button-remove.png')}
			  />
			</TouchableHighlight>
			<TouchableHighlight
			  activeOpacity={0.6}
			  underlayColor="#DDDDDD"
			  onPress={() => {setCopyNum(copyNum + 1)}}>
			  <Image
				style={styles.copyNumChangeBtn}
				source={require('../assets/image/si-glyph-button-plus.png')}
			  />
			</TouchableHighlight>
		</View>
	  </View>
		<View style = {{flexDirection: 'row', margin: 5, justifyContent: 'space-between'}}>
			<TouchableHighlight
			  activeOpacity={0.6}
			  underlayColor="#DDDDDD"
			  style={styles.touchableHightlight}
			  onPress={pickFile}>
				<Text style={styles.button}> Pick a file to print </Text>
			</TouchableHighlight>
		</View>
		<Text style = {styles.text}>{ file }</Text>
	  <View style = {{position: 'absolute', bottom: 20}}>
		<View style = {{flexDirection: 'row', margin: 5, justifyContent: 'space-between'}}>
			<TouchableHighlight
			  activeOpacity={0.6}
			  underlayColor="#fff"
			  style={styles.touchableHightlight}
			  onPress={settings}>
				<Text style={styles.button}> Settings </Text>
			</TouchableHighlight>
			<TouchableHighlight
			  activeOpacity={0.6}
			  underlayColor="#fff"
			  style={styles.touchableHightlight}
			  onPress={print}>
				<Text style={styles.button}> Print </Text>
			</TouchableHighlight>
		</View>
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
    color: '#fff',
    fontSize: 20,
    fontStyle: 'bold',
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
  touchableHightlight: {
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#2196f3',
	borderRadius: 3,
	paddingVertical: 3,
	paddingHorizontal: 10,
	width: '45%',
  },
  copies: {
    width: '100%',
    height: 60,
    // alignItems: 'end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
	paddingLeft: 20,
	paddingRight: 20,
  },
  text: {
    fontSize: 16,
  },
  copyNumBtn: {
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 2,
  },
  copyNumChangeBtn: {
    width: 25,
    height: 23,
    marginRight: 2,
  },
});
