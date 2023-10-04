import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {useRecoilValue} from 'recoil';

import AppScreen from '@appComp/AppScreen';
import Notes from '@appComp/Notes';
import {TNotes} from '@appTypes/app.zod';
import {RootStackList} from '@appTypes/navigators.type';
import {Icon} from '@components';
import {atomNotes} from '@recoils';
import {useStackNavigation} from '@utils/navigators';

export default function NotesScreen() {
  const data = useRecoilValue(atomNotes);
  const {navigation} = useStackNavigation();

  function navigate(notes: TNotes) {
    navigation.navigate(RootStackList.NoteDetail, notes);
  }

  function addNew() {
    navigation.navigate(RootStackList.NoteDetail);
  }

  return (
    <AppScreen>
      <FlashList
        data={data}
        ListEmptyComponent={
          <Text className="text-black">
            Noting to see here, please add some notes
          </Text>
        }
        renderItem={({item}) => {
          return <Notes {...item} onPress={() => navigate(item)} />;
        }}
      />
      <TouchableOpacity
        className="absolute bottom-5 right-5 w-14 h-14 bg-green-600 rounded-full items-center justify-center"
        onPress={addNew}>
        <Icon name="plus" className="text-white text-xl" />
      </TouchableOpacity>
    </AppScreen>
  );
}
