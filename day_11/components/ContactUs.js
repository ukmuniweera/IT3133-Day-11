import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';

export default function ContactUs() {
  return (
          <PaperProvider>
              <Text style={styles.header} variant="headlineLarge">ContactUs</Text>
              <Text style={styles.body} variant="bodyLarge">
                  Peter always saw the world in black and white. There were two choices for every situation and you had to choose one of them. It was therefore terribly uncomfortable for him to spend time with Ashley. She saw the world in shades of gray with hundreds of choices to choose from in every situation.
              </Text>
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
  });
  
  