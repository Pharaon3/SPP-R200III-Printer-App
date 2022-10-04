import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import SelectList from "react-native-dropdown-select-list";
import ToggleSwitch from "toggle-switch-react-native";

export default function Setting() {
  const [sizeSelected, setSizeSelected] = React.useState("");
  const [typeSelected, setTypeSelected] = React.useState("");
  const [startDocNumber, setStartDocNumber] = React.useState(1);
  const [endDocNumber, setEndDocNumber] = React.useState(1);
  const [startPageNumber, setStartPageNumber] = React.useState(1);
  const [endPageNumber, setEndPageNumber] = React.useState(1);
  const [lineFeedAfter, setLineFeedAfter] = React.useState(1);
  const [lineFeedBefore, setLineFeedBefore] = React.useState(1);
  const [tearOffPosition, setTearOffPosition] = useState(false);
  const [buzzerBefore, setBuzzerBefore] = useState(false);
  const [buzzerAfter, setBuzzerAfter] = useState(false);
  const sizeData = [
    { key: "1", value: "A4" },
    { key: "2", value: "A5" },
    { key: "3", value: "B5" },
    { key: "4", value: "B6" },
  ];
  const typeData = [
    { key: "11", value: "AA4" },
    { key: "22", value: "AA5" },
    { key: "33", value: "BB5" },
    { key: "44", value: "BB6" },
  ];
  const [copyNum, setCopyNum] = useState(1);
  const saveSettings = () => {};

  return (
    <>
      {/* Header BEGIN */}
      <View style={styles.headerBackground}>
        <Image
          style={styles.image}
          source={require("../assets/image/back_arrow_02.png")}
        />
        <Text style={styles.headerText}> Select the Printer </Text>
      </View>
      {/* Header END */}

      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#000" />

        <ScrollView>
          <View style={styles.body}>
            {/* Pagesize BEGINE */}
            <Text style={styles.titleText}> Paper </Text>
            <View style={styles.settingBox}>
              <Text> PageSize </Text>
              <View style={{}}>
                <SelectList
                  setSelected={setSizeSelected}
                  data={sizeData}
                  onSelect={() => alert(sizeSelected)}
                  boxStyles={{ borderRadius: 0, borderWidth: 0, padding: 0 }} //override default styles
                  inputStyles={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  search={true}
                  placeholder="pagesize"
                />
              </View>
              {/* Pagesize END */}

              {/* PageType BEGINE */}
              <Text> PageType </Text>
              <View style={{}}>
                <SelectList
                  setSelected={setTypeSelected}
                  data={typeData}
                  onSelect={() => alert(typeSelected)}
                  boxStyles={{ borderRadius: 0, borderWidth: 0 }} //override default styles
                  inputStyles={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  search={true}
                  placeholder="pagetype"
                />
              </View>
            </View>
            {/* PageType END */}

            {/* Copies BEGNIE*/}
            <Text style={styles.titleText}> Number of copies </Text>
            <View style={styles.settingBox}>
              <View style={styles.copies}>
                <Text style={styles.text}> Copies: {copyNum} </Text>
                <View style={styles.copyNumBtn}>
                  <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor="#fff"
                    onPress={() => {
                      copyNum > 1 ? setCopyNum(copyNum - 1) : null;
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
                      copyNum < 100 ? setCopyNum(copyNum + 1) : null;
                    }}
                  >
                    <Image
                      style={styles.copyNumChangeBtn}
                      source={require("../assets/image/si-glyph-button-plus.png")}
                    />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            {/* Copies END */}

            {/* Send Command BEGIN */}
            <Text style={styles.titleText}> Send Command </Text>
            <View style={styles.settingBox}>
              {/* Start Doc BEGIN */}
              <View style={styles.lineView}>
                <Text> Start Doc: </Text>
                <View style={{ width: "50%" }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setStartDocNumber}
                    value={startDocNumber}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              {/* Start Doc END */}
              {/* Start Page BEGIN */}
              <View style={styles.lineView}>
                <Text> Start Page: </Text>
                <View style={{ width: "50%" }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setStartPageNumber}
                    value={startPageNumber}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              {/* Start Page END */}
              {/* End Page BEGIN */}
              <View style={styles.lineView}>
                <Text> End Page: </Text>
                <View style={{ width: "50%" }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setEndPageNumber}
                    value={endPageNumber}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              {/* End Page END */}
              {/* End Doc BEGIN */}
              <View style={styles.lineView}>
                <Text> End Doc: </Text>
                <View style={{ width: "50%" }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setEndDocNumber}
                    value={endDocNumber}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              {/* End Doc END */}
            </View>
            {/* Send Command END */}

            {/* Feed BEGIN */}
            <Text style={styles.titleText}> Feed </Text>
            <View style={styles.settingBox}>
              {/* Line-feeds after printing BEGIN */}
              <View style={styles.lineView}>
                <Text> Line-feeds after printing: </Text>
                <View style={{ width: "50%" }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setLineFeedAfter}
                    value={lineFeedAfter}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              {/* Line-feeds after printing END */}
              {/* Line-feeds before printing BEGIN */}
              <View style={styles.lineView}>
                <Text> Line-feeds before printing: </Text>
                <View style={{ width: "50%" }}>
                  <TextInput
                    style={styles.input}
                    onChangeText={setLineFeedBefore}
                    value={lineFeedBefore}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              {/* Line-feeds before printing END */}
            </View>
            {/* Feed END */}

            {/* Tear Off Position & Buzzer BEGIN */}
            <Text style={styles.titleText}> Tear Off Position & Buzzer </Text>
            <View style={styles.settingBox}>
              {/* Feed to Tear Off Position BEGIN */}
              <View style={styles.lineView}>
                <Text> Feed to Tear Off Position </Text>
                <View style={styles.toggleSwitch}>
                  <ToggleSwitch
                    isOn={tearOffPosition}
                    onColor="green"
                    offColor="red"
                    size="large"
                    onToggle={() => {
                      setTearOffPosition(!tearOffPosition);
                    }}
                  />
                  {tearOffPosition ? <Text> On </Text> : <Text> Off </Text>}
                </View>
              </View>
              {/* Feed to Tear Off Position END */}
              {/* Buzzer sound before printing BEGIN */}
              <View style={styles.lineView}>
                <Text> Buzzer sound before printing </Text>
                <View style={styles.toggleSwitch}>
                  <ToggleSwitch
                    isOn={buzzerBefore}
                    onColor="green"
                    offColor="red"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="large"
                    onToggle={() => {
                      setBuzzerBefore(!buzzerBefore);
                    }}
                  />
                  {buzzerBefore ? <Text> On </Text> : <Text> Off </Text>}
                </View>
              </View>
              {/* Buzzer sound before printing END */}
              {/* Buzzer sound after printing BEGIN */}
              <View style={styles.lineView}>
                <Text> Buzzer sound after printing </Text>
                <View style={styles.toggleSwitch}>
                  <ToggleSwitch
                    isOn={buzzerAfter}
                    onColor="green"
                    offColor="red"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="large"
                    // style={{
                    //   transform: [
                    //     { scaleX: moderateScale(1, 0.5) },
                    //     { scaleY: moderateScale(1, 0) },
                    //   ],
                    // }}
                    onToggle={() => {
                      setBuzzerAfter(!buzzerAfter);
                    }}
                  />
                  {buzzerAfter ? <Text> On </Text> : <Text> Off </Text>}
                </View>
              </View>
              {/* Buzzer sound after printing END */}
            </View>
            {/* Tear Off Position & Buzzer END */}

            {/* Save Settings BEGIN */}
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#2196f3"
              style={styles.saveButton}
              onPress={saveSettings}
            >
              <Text style={styles.button}> Save </Text>
            </TouchableHighlight>
            {/* Save Settings END */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  body: {
    width: "100%",
    // height: "100%",
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    textAlign: "right",
  },
  text: {
    fontSize: 16,
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196f3",
    borderRadius: 10,
    paddingVertical: 15, //   modify this for changing height of the save button.
    paddingHorizontal: 10,
    width: "65%", //  modify this for changing width of the save button.
    marginBottom: 20,
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
    width: 50,
    height: 47,
    margin: 10,
  },
  button: {
    color: "#fff",
    fontSize: 26,
    fontStyle: "bold",
  },
  toggleSwitch: {
    flexDirection: "column",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  settingBox: {
    borderWidth: 1,
    width: "90%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
  },
  titleText: {
    fontSize: 24,
  },
  lineView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    margin: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 2,
  },
  headerBackground: {
    width: "100%",
    height: 60,
    backgroundColor: "#ee6809",
    // alignItems: 'end',
    // justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: 2,
  },
});
