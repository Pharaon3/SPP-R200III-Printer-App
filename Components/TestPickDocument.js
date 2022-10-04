import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const TestPickDocument = () => {
    const [file, setFile] = useState(null);

    const pickFile = async () => {

        const result = await DocumentPicker.getDocumentAsync({
            type: "application/*"
        });

        if (!result.cancelled) {
            setFile(result.name);
        }
    }
    
    return (
        <View style={styles.container}>
            <Text>{ file }</Text>
            <Button title="Pick a file from mobile" onPress={pickFile} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
});

export default TestPickDocument;