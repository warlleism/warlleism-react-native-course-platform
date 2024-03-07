import 'react-native-reanimated'
import { Routes } from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useColorMode from './src/context/darkModeStore';

export default function App() {

  const colorMode = useColorMode((state) => state.colorMode)

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colorMode === 'dark' ? "#212121" : "#fff"} />
      <Routes />
    </NavigationContainer>
  );
}

