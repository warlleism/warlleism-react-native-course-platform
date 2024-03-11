import React from 'react';
import { Routes } from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar as RNStatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import useTheme from './src/hooks/useTheme';

export default function App() {
  const { colorMode, styles } = useTheme()

  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) + 10 : 0,
          backgroundColor: styles.backgroundColor,
        }}
      >
        <RNStatusBar backgroundColor={styles.backgroundColor} />
        <Routes />
      </SafeAreaView>
      <ExpoStatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}
