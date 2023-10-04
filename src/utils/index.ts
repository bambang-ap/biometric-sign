import {Alert} from 'react-native';

import clsx from 'clsx';

import {PromptOptions} from '@appTypes/propsType.type';

export * from './biometrics';

export const classNames = clsx;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function entries<T extends object>(obj?: T) {
  if (!obj) return [];

  return Object.entries(obj) as Entries<T>;
}

export function prompt(message: string, options?: PromptOptions): void;
export function prompt(
  title: string,
  message: string,
  options?: PromptOptions,
): void;
export function prompt(
  titleOrMessage: string,
  messageOrOptions?: string | PromptOptions,
  promptOptions?: PromptOptions,
) {
  const isHasTitle = typeof messageOrOptions === 'string';
  const options = isHasTitle ? promptOptions : messageOrOptions;

  Alert.prompt(
    isHasTitle ? titleOrMessage : 'Alert',
    isHasTitle ? messageOrOptions : titleOrMessage,
    [
      {text: options?.confirmText ?? 'Yes', onPress: options?.onConfirm},
      {text: options?.cancelText ?? 'No', onPress: options?.onCancel},
    ],
    'default',
  );
}
