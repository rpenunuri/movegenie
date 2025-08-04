import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BoxCard from '../components/BoxCard';
import { loadBoxes } from '../storage/boxes';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [box, setBox] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    const boxes = await loadBoxes();
    const found = boxes.find(b => b.id === data);
    setBox(found || null);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {scanned && (
        <View style={styles.result}>
          {box ? <BoxCard box={box} /> : <Text>Box not found</Text>}
          <Button title="Scan Again" onPress={() => { setScanned(false); setBox(null); }} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
