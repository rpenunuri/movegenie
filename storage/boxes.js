import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'boxes';

export async function loadBoxes() {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load boxes', e);
    return [];
  }
}

export async function saveBox(box) {
  const boxes = await loadBoxes();
  boxes.push(box);
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(boxes));
  } catch (e) {
    console.error('Failed to save box', e);
  }
}
