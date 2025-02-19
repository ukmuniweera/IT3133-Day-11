import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AboutUs() {
    const navigation = useNavigation();
    return (
        <PaperProvider>
            <Card>
                <View style={styles.container}>
                    <Text style={styles.title}>History</Text>
                    <Text style={styles.description}>
                        The Vavuniya Campus of the University of Jaffna was established on 1st April 1997, upgraded from The Northern Province Affiliated University College, under an Order made under Section 22 of the Universities Act No. 16 of 1978, with two faculties: Business Studies and Applied Science.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button mode="contained" onPress={() => navigation.navigate("Home")} style={styles.button}>
                            Home
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
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'justify',
        lineHeight: 24,
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
