import * as React from 'react';
import {Text} from 'react-native';

import {Header} from '@appComp/Header';

export default function MainHeader() {
  return (
    <Header>
      <Text className="flex-1">WhatsApp</Text>
    </Header>
  );
}
