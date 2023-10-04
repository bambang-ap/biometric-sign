import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import moment from 'moment';
import {useSetRecoilState} from 'recoil';

import {NotesProps} from '@appTypes/propsType.type';
import {Icon} from '@components';
import {FORMAT_DATE_VIEW} from '@constants';
import {atomNotes} from '@recoils';
import {prompt} from '@utils';

export default function Notes({id, title, notes, date, onPress}: NotesProps) {
  const setNotes = useSetRecoilState(atomNotes);

  function deleteNote() {
    prompt('Delete this note?', {
      onConfirm() {
        setNotes(prev => {
          const index = prev.findIndex(note => note.id === id);

          if (index >= 0) return prev.remove(index);

          return prev;
        });
      },
    });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="p-2 border border-black rounded-lg mb-2">
      <View className="flex-1 mb-4">
        <Text
          numberOfLines={1}
          ellipsizeMode="clip"
          className="text-black font-bold text-lg">
          {title}
        </Text>
        <Text className="text-black text-justify">{notes}</Text>
      </View>
      <View className="flex-row items-center">
        <Icon
          className="text-black text-sm"
          name="trash"
          onPress={deleteNote}
        />
        <Text
          className="text-black flex-1 text-right font-semibold"
          numberOfLines={1}>
          {moment(date).format(FORMAT_DATE_VIEW)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
