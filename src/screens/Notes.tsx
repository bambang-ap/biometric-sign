import React from 'react';

import {FlashList} from '@shopify/flash-list';

import AppScreen from '@appComp/AppScreen';
import Notes from '@appComp/Notes';
import {TNotes} from '@appTypes/app.zod';
import {RootStackList} from '@appTypes/navigators.type';
import {useStackNavigation} from '@utils/navigators';

export default function NotesScreen() {
  const {navigation} = useStackNavigation();

  const data: TNotes[] = [
    {
      title: 'Note 1',
      date: '2023-10-01 22:15:00',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto natus, minus quibusdam quas expedita vel, magni sint iure dicta nemo, minima assumenda. Ad accusantium modi earum quae vero nisi.',
    },
    {
      title: 'Note 2',
      date: '2023-10-05 22:15:00',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto natus, minus quibusdam quas expedita vel, magni sint iure dicta nemo, minima assumenda. Ad accusantium modi earum quae vero nisi.',
    },
    {
      title: 'Note 3',
      date: '2023-10-10 22:15:00',
      notes:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto natus, minus quibusdam quas expedita vel, magni sint iure dicta nemo, minima assumenda. Ad accusantium modi earum quae vero nisi.',
    },
  ];

  function navigate(notes: TNotes) {
    navigation.navigate(RootStackList.NoteDetail, notes);
  }

  return (
    <AppScreen>
      <FlashList
        data={data}
        renderItem={({item}) => {
          return <Notes {...item} onPress={() => navigate(item)} />;
        }}
      />
    </AppScreen>
  );
}
