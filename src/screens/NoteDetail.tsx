import React, {useEffect} from 'react';
import {Button, View} from 'react-native';

import moment from 'moment';
import {useForm} from 'react-hook-form';
import {useSetRecoilState} from 'recoil';

import AppScreen from '@appComp/AppScreen';
import {TNotes} from '@appTypes/app.zod';
import {RootStackList} from '@appTypes/navigators.type';
import {Icon, Input} from '@components';
import {FORMAT_DATE} from '@constants';
import {atomNotes} from '@recoils';
import {entries, prompt} from '@utils';
import {useStackNavigation} from '@utils/navigators';

export default function NoteDetail() {
  const {
    navigation,
    route: {params},
  } = useStackNavigation<RootStackList.NoteDetail>();

  const setNotes = useSetRecoilState(atomNotes);

  const {control, watch, handleSubmit, reset} = useForm<TNotes>({
    defaultValues: params,
  });

  const dataForm = watch();

  const submit = handleSubmit(values => {
    setNotes(prev => {
      const index = prev.findIndex(note => note.id === dataForm.id);

      if (index >= 0) {
        return prev.replace(index, values);
      }

      return [values, ...prev];
    });

    navigation.goBack();
  });

  function goBack() {
    const compare = entries(dataForm).map(([key, value]) => {
      return value === params?.[key];
    });

    if (compare.includes(false)) {
      prompt('There is a change', 'Are you sure to discard the changes?', {
        onConfirm: navigation.goBack,
      });
    } else {
      navigation.goBack();
    }
  }

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <AppScreen>
      <Input
        fieldName="id"
        control={control}
        dClassName="hidden"
        defaultValue={uuid()}
      />
      <Input
        fieldName="date"
        control={control}
        dClassName="hidden"
        defaultValue={moment().format(FORMAT_DATE)}
      />
      <View className="flex-row items-center justify-between">
        <Icon name="chevron-left" className="text-lg" onPress={goBack} />
        <Input
          placeholder="Title"
          dClassName="flex-1 mx-2"
          control={control}
          fieldName="title"
        />
        <Button title="Save" onPress={submit} />
      </View>
      <Input
        dClassName="flex-1 my-2"
        control={control}
        fieldName="notes"
        placeholder="Type here..."
        multiline
      />
    </AppScreen>
  );
}
