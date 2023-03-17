import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppController from 'src/infrastructure/controllers/AppControllers';

export default function App() {
  const post = async () => {
    await AppController()
  }

  post()
  return (
    <View style={styles.container}>
      <Text>COUCOU IsfdvbdqbfddfbqdfbMHAHA</Text>
      <StatusBar style="auto" />
    </View>
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
