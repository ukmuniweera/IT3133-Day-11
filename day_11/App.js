import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Home />
          <AboutUs />
          <ContactUs />
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});