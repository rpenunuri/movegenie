import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import BoxCard from '../components/BoxCard';
import { saveBox } from '../storage/boxes';

export default function NewBoxScreen() {
  const [title, setTitle] = useState('');
  const [room, setRoom] = useState('');
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState([]);
  const [savedBox, setSavedBox] = useState(null);

  const addItem = () => {
    if (!itemText.trim()) return;
    setItems([...items, itemText.trim()]);
    setItemText('');
  };

  const handleSave = async () => {
    const id = Date.now().toString();
    const box = { id, title, room, items };
    await saveBox(box);
    setSavedBox(box);
    setTitle('');
    setRoom('');
    setItems([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Box title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Room"
        value={room}
        onChangeText={setRoom}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Add item"
          value={itemText}
          onChangeText={setItemText}
        />
        <Button title="Add" onPress={addItem} />
      </View>
      {items.map((it, idx) => (
        <Text key={idx} style={styles.item}>• {it}</Text>
      ))}
      <Button title="Save Box" onPress={handleSave} />
      {savedBox && (
        <View style={styles.saved}>
          <BoxCard box={savedBox} />
          <QRCode value={savedBox.id} size={150} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  item: {
    marginLeft: 8,
    marginBottom: 4,
  },
  saved: {
    alignItems: 'center',
    marginTop: 16,
  },
});
