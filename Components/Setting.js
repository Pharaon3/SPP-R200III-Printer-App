import { StyleSheet, Text, View } from "react-native";
import { Image, TouchableHighlight, TextInput } from "react-native";
import React, { useState } from "react";
import SelectList from "react-native-dropdown-select-list";
import ToggleSwitch from "toggle-switch-react-native";

export default function Setting() {
  const [selected, setSelected] = React.useState("");
  const [number, onChangeNumber] = React.useState(1);
  const [tearOffPosition, setTearOffPosition] = useState(false);
  const [buzzerBefore, setBuzzerBefore] = useState(false);
  const [buzzerAfter, setBuzzerAfter] = useState(false);
  const data = [
    { key: "1", value: "A4" },
    { key: "2", value: "A5" },
    { key: "3", value: "B5" },
    { key: "4", value: "B6" },
  ];
  const [copyNum, setCopyNum] = useState(1);
  const saveSettings = () => {};

  return (
    <View style={styles.container}>
      {/* Pagesize BEGINE */}
      <View
        style={{ flexDirection: "column", alignItems: "center", margin: 5 }}
      >
        <Text> PageSize </Text>
        <View style={{}}>
          <SelectList
            setSelected={setSelected}
            data={data}
            onSelect={() => alert(selected)}
            boxStyles={{ borderRadius: 0, borderWidth: 0, padding: 0 }} //override default styles
            inputStyles={{ justifyContent: "center", alignItems: "center" }}
            search={true}
            placeholder="pagesize"
          />
        </View>
      </View>
      {/* Pagesize END */}

      {/* PageType BEGINE */}
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text> PageType </Text>
        <View style={{}}>
          <SelectList
            setSelected={setSelected}
            data={data}
            onSelect={() => alert(selected)}
            boxStyles={{ borderRadius: 0, borderWidth: 0 }} //override default styles
            inputStyles={{ justifyContent: "center", alignItems: "center" }}
            search={true}
            placeholder="pagetype"
          />
        </View>
      </View>
      {/* PageType END */}

      {/* Copies BEGNIE*/}
      <View style={styles.copies}>
        <Text style={styles.text}> Copies: {copyNum} </Text>
        <View style={styles.copyNumBtn}>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#fff"
            onPress={() => {
              setCopyNum(copyNum - 1);
            }}
          >
            <Image
              style={styles.copyNumChangeBtn}
              source={require("../assets/image/si-glyph-button-remove.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#fff"
            onPress={() => {
              setCopyNum(copyNum + 1);
            }}
          >
            <Image
              style={styles.copyNumChangeBtn}
              source={require("../assets/image/si-glyph-button-plus.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
      {/* Copies END */}

      {/* Send Command BEGIN */}
      <Text> Send Command </Text>
      <View
        style={{ borderWidth: 1, width: "80%", padding: 10, marginBottom: 15 }}
      >
        {/* Start Doc BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text> Start Doc: </Text>
          <View style={{ width: "50%" }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* Start Doc END */}
        {/* Start Page BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text> Start Page: </Text>
          <View style={{ width: "50%" }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* Start Page END */}
        {/* End Page BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text> Start Page: </Text>
          <View style={{ width: "50%" }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* End Page END */}
        {/* End Doc BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text> Start Doc: </Text>
          <View style={{ width: "50%" }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* End Doc END */}
      </View>
      {/* Send Command END */}

      {/* Feed BEGIN */}
      <Text> Feed </Text>
      <View
        style={{ borderWidth: 1, width: "80%", padding: 10, marginBottom: 15 }}
      >
        {/* Line-feeds after printing BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text> Line-feeds after printing: </Text>
          <View style={{ width: "50%" }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* Line-feeds after printing END */}
        {/* Line-feeds before printing BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text> Line-feeds before printing: </Text>
          <View style={{ width: "50%" }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* Line-feeds before printing END */}
      </View>
      {/* Feed END */}

      {/* Tear Off Position & Buzzer BEGIN */}
      <Text> Tear Off Position & Buzzer </Text>
      <View
        style={{ borderWidth: 1, width: "80%", padding: 10, marginBottom: 15 }}
      >
        {/* Feed to Tear Off Position BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
          }}
        >
          <Text> Feed to Tear Off Position </Text>
          <View
            style={{
              flexDirection: "column",
              width: "50%",
              borderWidth: 1,
              alignItems: "right",
            }}
          >
            <ToggleSwitch
              isOn={tearOffPosition}
              onColor="green"
              offColor="red"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="small"
              onToggle={() => {
                setTearOffPosition(!tearOffPosition);
              }}
            />
            {tearOffPosition ? <Text> on </Text> : <Text> off </Text>}
          </View>
        </View>
        {/* Feed to Tear Off Position END */}
        {/* Buzzer sound before printing BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
          }}
        >
          <Text> Buzzer sound before printing </Text>
          <View
            style={{
              flexDirection: "column",
              width: "50%",
              borderWidth: 1,
              alignItems: "right",
            }}
          >
            <ToggleSwitch
              isOn={buzzerBefore}
              onColor="green"
              offColor="red"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="small"
              onToggle={() => {
                setBuzzerBefore(!buzzerBefore);
              }}
            />
            {buzzerBefore ? <Text> on </Text> : <Text> off </Text>}
          </View>
        </View>
        {/* Buzzer sound before printing END */}
        {/* Buzzer sound after printing BEGIN */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
          }}
        >
          <Text> Buzzer sound after printing </Text>
          <View
            style={{
              flexDirection: "column",
              width: "50%",
              borderWidth: 1,
              alignItems: "right",
            }}
          >
            <ToggleSwitch
              isOn={buzzerAfter}
              onColor="green"
              offColor="red"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="small"
              onToggle={() => {
                setBuzzerAfter(!buzzerAfter);
              }}
            />
            {buzzerAfter ? <Text> on </Text> : <Text> off </Text>}
          </View>
        </View>
        {/* Buzzer sound after printing END */}
      </View>
      {/* Tear Off Position & Buzzer END */}

      {/* Save Settings BEGIN */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#fff"
        style={styles.touchableHightlight}
        onPress={saveSettings}
      >
        <Text style={styles.button}> Save </Text>
      </TouchableHighlight>
      {/* Save Settings END */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
  text: {
    fontSize: 16,
  },
  headerBackground: {
    width: "100%",
    height: 40,
    backgroundColor: "#ee6809",
    // alignItems: 'end',
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 16,
    marginLeft: 20,
  },
  category: {
    height: 100,
    // justifyContent: 'center',
    width: "90%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#f55",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  selPrinter: {
    height: 40,
    justifyContent: "center",
    width: "60%",
    backgroundColor: "#ee6809",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#f55",
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  warningImage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  selPrinterText: {
    color: "#fff",
    fontWeight: "bold",
  },
  touchableHightlight: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196f3",
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 10,
    width: "45%",
  },
  copies: {
    width: "100%",
    height: 60,
    // alignItems: 'end',
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  copyNumBtn: {
    flexDirection: "row",
  },
  copyNumChangeBtn: {
    width: 25,
    height: 23,
    marginRight: 2,
  },
  button: {
    color: "#fff",
    fontSize: 20,
    fontStyle: "bold",
  },
});
