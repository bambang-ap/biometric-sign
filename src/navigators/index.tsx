import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackList, RootStackParamList} from '@appTypes/navigators.type';
import AuthScreen from '@screens/Auth';
import NoteDetail from '@screens/NoteDetail';
import NotesScreen from '@screens/Notes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RootStackList.Auth}>
      <Stack.Screen name={RootStackList.Auth} component={AuthScreen} />
      <Stack.Screen name={RootStackList.Notes} component={NotesScreen} />
      <Stack.Screen name={RootStackList.NoteDetail} component={NoteDetail} />
    </Stack.Navigator>
  );
}
