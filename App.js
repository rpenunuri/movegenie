import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import NewBoxScreen from './screens/NewBoxScreen';
import ScanScreen from './screens/ScanScreen';
import ChecklistScreen from './screens/ChecklistScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewBox" component={NewBoxScreen} options={{ title: 'New Box' }} />
        <Stack.Screen name="Scan" component={ScanScreen} options={{ title: 'Scan QR' }} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
