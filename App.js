import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Open up App.js to start working on your app! </Text>
      <Text style = {styles.text}> Hi. I am Here! </Text>
      <Button title = 'New Button' onPress={() => { Linking.openURL('https://tipple.xyz')}}> </Button>
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


