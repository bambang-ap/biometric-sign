import React from 'react';
import {TextInput, View} from 'react-native';

import {FieldValues} from 'react-hook-form';

import {InputProps} from '@appTypes/propsType.type';
import {
  ControlledComponentProps,
  withReactFormController,
} from '@hoc/withReactHookForm';

function InputComponent<F extends FieldValues>(
  props: ControlledComponentProps<F, InputProps>,
) {
  const {controller, className, placeholder, autoFocus, multiline} = props;
  const {
    field: {value, onChange, ...field},
  } = controller;

  return (
    <View className={className}>
      <TextInput
        {...field}
        multiline={multiline}
        autoFocus={autoFocus}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </View>
  );
}

export const Input = withReactFormController(InputComponent);
