import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';

export default function ContactUs() {
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [message, setMessage] = React.useState();
    const [user, setUser] = React.useState();

    const handleSubmit = () => {
        setUser({ name, email, message });
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    }

    return (
        <PaperProvider>
            <Text style={styles.header} variant="headlineLarge">ContactUs</Text>
            <View style={styles.container}>
                <TextInput style={styles.inputs} label='Name' mode='outlined' value={name} onChangeText={setName} />
                <TextInput style={styles.inputs} label='Email' mode='outlined' value={email} onChangeText={setEmail} />
                <TextInput style={styles.inputs} label='Message' mode='outlined' multiline numberOfLines={5} value={message} onChangeText={setMessage} />
                <Button mode="contained" onPress={handleSubmit}>Send</Button>
            </View>
            <StatusBar style="auto" />
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    header: {
        color: 'black',
        textAlign: 'center',
        padding: 10,
    },
    body: {
        color: 'black',
        textAlign: 'justify',
        padding: 10,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    inputs: {
        width: '80%',
        margin: 10,
    },
});

