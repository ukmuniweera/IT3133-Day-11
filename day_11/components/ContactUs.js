import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Button, Appbar } from 'react-native-paper';

export default function ContactUs() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [user, setUser] = React.useState(null);

  const handleSubmit = () => {
    setUser({ name, email, message });
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Contact Us" />
      </Appbar.Header>

      <View style={styles.container}>
        <Text style={styles.title}>Feel free to contact us!</Text>
        
        <TextInput
          style={styles.input}
          label="Name"
          mode="outlined"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={[styles.input, styles.messageInput]}
          label="Message"
          mode="outlined"
          multiline
          numberOfLines={5}
          value={message}
          onChangeText={setMessage}
        />

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
        >
          Send
        </Button>
      </View>

      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    marginBottom: 15,
  },
  messageInput: {
    height: 120,
  },
  button: {
    marginTop: 20,
  },
});
