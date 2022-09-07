import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/areas/home/home';
import { AppContextProvider } from './src/common/context/app-context';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
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
