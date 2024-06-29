import { Text, View, Button } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationProps } from '../types/Navigation';

export default function HomeScreen ({ navigation }: NavigationProps) {
  return (
    <View style={styles.container}>
      <Text marginB-20>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        label="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
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