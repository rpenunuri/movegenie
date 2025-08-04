import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'checklist';

export async function loadChecklist(defaultTasks) {
  try {
    const data = await AsyncStorage.getItem(KEY);
    if (data) return JSON.parse(data);
    const initial = defaultTasks.map(text => ({ text, done: false }));
    await AsyncStorage.setItem(KEY, JSON.stringify(initial));
    return initial;
  } catch (e) {
    console.error('Failed to load checklist', e);
    return defaultTasks.map(text => ({ text, done: false }));
  }
}

export async function saveChecklist(items) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save checklist', e);
  }
}
