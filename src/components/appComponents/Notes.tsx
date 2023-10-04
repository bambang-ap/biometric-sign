import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import moment from 'moment';

import {NotesProps} from '@appTypes/propsType.type';

export default function Notes({title, notes, date, onPress}: NotesProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-center p-2 border border-black rounded-lg mb-2">
      <View className="gap-2 mb-4">
        <Text
          className="font-bold text-lg"
          ellipsizeMode="clip"
          numberOfLines={1}>
          {title}
        </Text>
        <Text>{notes}</Text>
      </View>
      <Text className="w-full font-semibold text-right" numberOfLines={1}>
        {moment(date).format('DD-MM-YYYY HH:mm:ss')}
      </Text>
    </TouchableOpacity>
  );
}
