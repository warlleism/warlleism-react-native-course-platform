import React from 'react';
import { Routes } from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, Platform, Dimensions } from 'react-native';  // Import Platform from 'react-native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import useColorMode from './src/context/darkModeStore';

const { width, height } = Dimensions.get('screen')

export default function App() {
  const colorMode = useColorMode((state) => state.colorMode);
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
          backgroundColor: colorMode === 'dark' ? '#212121' : '#f2f2f2',
        }}
      >
        <StatusBar
          backgroundColor={colorMode === 'dark' ? '#212121' : '#f2f2f2'}
        />
        <Routes />
      </SafeAreaView>
      <ExpoStatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}
