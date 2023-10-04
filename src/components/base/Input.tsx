import React from 'react';
import {TextInput, View} from 'react-native';

import {FieldValues} from 'react-hook-form';

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
    <View
      className={classNames(
        'border border-black px-2 py-1 rounded-lg',
        className,
      )}>
      <TextInput
        {...field}
        value={value}
        multiline={multiline}
        autoFocus={autoFocus}
        onChangeText={onChange}
        placeholder={placeholder}
        className="flex-1"
      />
    </View>
  );
}

export const Input = withReactFormController(InputComponent);
