import React from 'react';
import {Image, View} from 'react-native';

import {UserImageProps} from '@appTypes/propsType.type';
import {Icon} from '@components';
import {EUserType} from '@constants/enum.const';
import {classNames} from '@utils/index';

export function UserImage({
  picture: image,
  type,
  sizeClassName = '',
}: UserImageProps) {
  const isUser = type === EUserType.P;

  const className = classNames('w-9 h-9 rounded-full', {
    [sizeClassName]: !!sizeClassName,
  });

  return (
    <>
      {!!image && isUser ? (
        <Image className={className} source={{uri: image}} />
      ) : (
        <View
          className={classNames(
            'items-center justify-center',
            'bg-gray-500',
            className,
          )}>
          <Icon name="users" className="text-white text-lg" />
        </View>
      )}
    </>
  );
}
