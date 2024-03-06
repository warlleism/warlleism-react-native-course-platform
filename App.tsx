import 'react-native-reanimated'
import { Routes } from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

