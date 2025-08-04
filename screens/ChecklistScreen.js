import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ChecklistItem from '../components/ChecklistItem';
import { loadChecklist, saveChecklist } from '../storage/checklist';

const defaultTasks = [
  'Book movers',
  'Pack boxes',
  'Label boxes',
  'Notify utilities',
  'Clean old place',
];

export default function ChecklistScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await loadChecklist(defaultTasks);
      setItems(data);
    })();
  }, []);

  const toggle = async (index) => {
    const updated = items.map((it, idx) =>
      idx === index ? { ...it, done: !it.done } : it
    );
    setItems(updated);
    await saveChecklist(updated);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.text}
        renderItem={({ item, index }) => (
          <ChecklistItem item={item} onToggle={() => toggle(index)} />
        )}
      />
    </View>
  );
}
