import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View } from 'react-native';
import { PaperProvider, Text, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <PaperProvider>
      <Card>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome !!!</Text>
          <Text style={styles.description}>
            We take great pleasure in welcoming you to the University of Vavuniya!
            Situated in the land that was once part of the kingdom of the legendary Vanni Kings, the University of Vavuniya is a higher seat of learning and research in this region, which provides higher education in the fields of Applied Science, Business Studies, and Technological Studies.
          </Text>

          <Image
            source={{ uri: 'https://vau.ac.lk/wp-content/uploads/2021/08/University-of-Vavuniya-Logo-1024x1024.png' }}
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={() => navigation.navigate("AboutUs")} style={styles.button}>
              About Us
            </Button>
            <Button mode="contained" onPress={() => navigation.navigate("ContactUs")} style={styles.button}>
              Contact Us
            </Button>
          </View>
        </View>
      </Card>
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
    backgroundColor: '#eef2f3',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    margin: 25,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2c3e50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    width: 150,
  },
});
