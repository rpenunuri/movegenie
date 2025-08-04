import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoxCard({ box }) {
  if (!box) return null;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{box.title}</Text>
      {box.room ? <Text style={styles.room}>{box.room}</Text> : null}
      {box.items && box.items.map((item, idx) => (
        <Text key={idx} style={styles.item}>- {item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  room: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
  item: {
    marginLeft: 8,
  },
});
