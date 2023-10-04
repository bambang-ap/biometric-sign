import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {AppScreenProps} from '@appTypes/propsType.type';
import {classNames} from '@utils';

export default function AppScreen({children, className}: AppScreenProps) {
  return (
    <SafeAreaView className={classNames('flex-1 bg-white', className)}>
      <View className="flex-1 px-2 pt-2">{children}</View>
    </SafeAreaView>
  );
}
