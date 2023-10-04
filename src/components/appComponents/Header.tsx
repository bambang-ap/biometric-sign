import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

export function Header({children}: PropsWithChildren) {
  return (
    <View className="flex-row h-16 justify-between items-center">
      {children}
    </View>
  );
}
