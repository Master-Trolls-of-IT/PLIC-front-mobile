import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppController from 'src/infrastructure/controllers/AppControllers';

export default function App() {

  const [message, setMessage] = useState("En attente de la connexion avec l'api")

  const post = async () => {
    await AppController(setMessage)
  }

  post()

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Hello Gaia !!</Text>
      <Text style={styles.message} >{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECCA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#84CF3D',
    fontSize: 35
  },
  message: {
    color: '#000',
    fontSize: 20
  }
});
