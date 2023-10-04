import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackList, RootStackParamList} from '@appTypes/navigators.type';
import ChatScreen from '@screens/Chat';
import MainScreen from '@screens/Main';
import UserInfoScreen from '@screens/UserInfo';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RootStackList.Chats}>
      <Stack.Screen name={RootStackList.Chats} component={MainScreen} />
      <Stack.Screen name={RootStackList.Chat} component={ChatScreen} />
      <Stack.Screen name={RootStackList.UserInfo} component={UserInfoScreen} />
    </Stack.Navigator>
  );
}
