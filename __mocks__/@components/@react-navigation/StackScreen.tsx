import React, {ComponentType} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackScreen = <P extends object>({
  component,
  initParams,
}: {
  component: ComponentType;
  initParams?: P;
}): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen
      name="MockStackScreen"
      initialParams={initParams}
      component={component}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default StackScreen;
