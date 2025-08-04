import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="New Box" onPress={() => navigation.navigate('NewBox')} />
      <Button title="Checklist" onPress={() => navigation.navigate('Checklist')} />
      <Button title="Scan QR" onPress={() => navigation.navigate('Scan')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    padding: 20,
  },
});
