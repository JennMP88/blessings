import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from "./components/menu"

export default function App() {
  return (
    <View style={styles.container}>
     <Menu/>
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
