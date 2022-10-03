import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import React, {useState} from 'react';
import SelectPrinter from './Components/SelectPrinter';

export default function App() {
  return (
    <View>
      <SelectPrinter />
    </View>
  );
}
