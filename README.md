# SPP-R200III-Printer-App
Project 22-09-30 SPP-R200III Printer App (React Native + bluetooth connection)

This is a printer app which run on Android device.
It connects to SPP-R200III Printer through Bluetooth.

# How to run
run command prompt.
check adb ( type adb enter)
	if failed
		install adb.
		extract adb.
		set environment variables.(path = )
if you are using Mumu player 
	adb connect 127.0.0.1:7555
adb devices
	check the list of devices attached.
npm start.
press a.

# Progress
This was developed with Expo Go.
But in progress I realized that Expo Go is not match for the requirement.
The app should display PDF previews but Expo doesn't support it.
I didn't implement the navigation.
So if you want to check my work, you should change some code in `App.js`.
In there, change the Component name as what you want to see.
For example, if you want to see the Setting component, 
Replace the `App.js` file like this.
```
import { Linking, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import React, { useState } from "react";
import Setting from "./Components/Setting";

export default function App() {
  return (
    <View>
      <Setting />
    </View>
  );
}
```
