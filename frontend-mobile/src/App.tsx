import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SignIn } from './Pages';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();
  }, []);

  return <SignIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
