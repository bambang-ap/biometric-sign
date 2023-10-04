import React from 'react';

import {FlashList} from '@shopify/flash-list';

import {UserBubblesProps} from '@appTypes/propsType.type';

import {Bubbles} from './Bubbles';

export function UserBubbles({users}: UserBubblesProps) {
  return (
    <FlashList
      data={users}
      estimatedItemSize={50}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Bubbles {...item} />}
    />
  );
}
