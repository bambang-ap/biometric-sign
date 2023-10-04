import React from 'react';
import {TextInput, View} from 'react-native';

import {FieldValues} from 'react-hook-form';
import twColors from 'tailwindcss/colors';

import {InputProps} from '@appTypes/propsType.type';
import {
  ControlledComponentProps,
  withReactFormController,
} from '@hoc/withReactHookForm';
import {classNames} from '@utils/index';

function InputComponent<F extends FieldValues>(
  props: ControlledComponentProps<F, InputProps>,
) {
  const {
    controller,
    dClassName: className,
    placeholder,
    autoFocus,
    multiline,
  } = props;
  const {
    field: {value, onChange, ...field},
  } = controller;

  return (
    <View className={classNames('border border-black rounded-lg', className)}>
      <TextInput
        {...field}
        value={value}
        multiline={multiline}
        autoFocus={autoFocus}
        onChangeText={onChange}
        placeholder={placeholder}
        className="text-black"
        style={{includeFontPadding: false}}
        placeholderTextColor={twColors.gray[300]}
      />
    </View>
  );
}

export const Input = withReactFormController(InputComponent);
