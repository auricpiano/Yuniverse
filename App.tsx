import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from './app.json'
import Main from './src/Main';

export default function App() {
  return (
    <PaperProvider children>
      <Main />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);