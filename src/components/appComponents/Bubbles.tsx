import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {TUser} from '@appTypes/data.type';
import {RootStackList} from '@appTypes/navigators.type';
import {useStackNavigation} from '@utils/navigators';

import {UserImage} from './UserImage';

export function Bubbles(user: TUser) {
  const {title} = user;

  const {navigation} = useStackNavigation();

  function navigate() {
    navigation.navigate(RootStackList.Chat, user);
  }

  return (
    <TouchableOpacity
      onPress={navigate}
      className="py-2 flex-row items-center gap-2">
      <View>
        <UserImage {...user} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
