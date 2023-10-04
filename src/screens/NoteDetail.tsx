import React from 'react';
import {Button, View} from 'react-native';

import {useForm} from 'react-hook-form';

import AppScreen from '@appComp/AppScreen';
import {TNotes} from '@appTypes/app.zod';
import {RootStackList} from '@appTypes/navigators.type';
import {Icon, Input} from '@components';
import {entries, prompt} from '@utils';
import {useStackNavigation} from '@utils/navigators';

export default function NoteDetail() {
  const {
    navigation,
    route: {params},
  } = useStackNavigation<RootStackList.NoteDetail>();

  const {control, watch, handleSubmit} = useForm<TNotes>({
    defaultValues: params,
  });

  const dataForm = watch();

  const submit = handleSubmit(values => {});

  function goBack() {
    const compare = entries(params).map(([key, value]) => {
      return value === dataForm[key];
    });

    if (compare.includes(false)) {
      prompt('There is a change', 'Are you sure to discard the changes?', {
        onConfirm: navigation.goBack,
      });
    } else {
      navigation.goBack();
    }
  }

  return (
    <AppScreen>
      <View className="flex-row items-center justify-between bg-red-400">
        <Icon name="chevron-left" onPress={goBack} />
        <Input className="flex-1" control={control} fieldName="title" />
        <Button title="Save" onPress={submit} />
      </View>
      <Input control={control} fieldName="notes" multiline />
    </AppScreen>
  );
}
