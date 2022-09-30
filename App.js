import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState('...');
  const [session, setSession] = useState({number:6, title: 'state'})
  const [current, setCurrent] = useState(true)
  const onclickHandler = () => {
    setName('Pharaon')
    setSession({number: 7, title: 'new state'})
    setCurrent(false)
  }
  return (
    <View style={styles.container}>
      <Text> Open up App.js to start working on your app! </Text>
      <Text style = {styles.text}> This is session number {session.number} and about {session.title} </Text>
      <Text style = {styles.text}> My name is {name} </Text>
      <Text style = {styles.text}> {current ? 'current session' : 'next session'} </Text>
      <Button title = 'What is my name?' onPress={onclickHandler}> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
    backgroundColor: '#d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});


