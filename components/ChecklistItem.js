import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ChecklistItem({ item, onToggle }) {
  return (
    <View style={styles.row}>
      <Text style={[styles.text, item.done && styles.done]}>{item.text}</Text>
      <Switch value={item.done} onValueChange={onToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
  },
  done: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
