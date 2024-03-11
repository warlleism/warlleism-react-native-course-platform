import React from 'react';
import { Routes } from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar as RNStatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import useColorMode from './src/context/darkModeStore';

export default function App() {
  const colorMode = useColorMode((state) => state.colorMode);
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) + 10 : 0,
          backgroundColor: colorMode === 'dark' ? '#001817' : '#f2f2f2',
        }}
      >
        <RNStatusBar backgroundColor={colorMode === 'dark' ? '#001817' : '#f2f2f2'} />
        <Routes />
      </SafeAreaView>
      <ExpoStatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}
