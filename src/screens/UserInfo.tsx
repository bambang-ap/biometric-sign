import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import AppScreen from '@appComp/AppScreen';
import {UserBubbles} from '@appComp/UserBubbles';
import {UserImage} from '@appComp/UserImage';
import {RootStackList} from '@appTypes/navigators.type';
import {Icon} from '@components';
import {EUserType} from '@constants/enum.const';
import {useStackNavigation} from '@utils/navigators';

export default function UserInfoScreen() {
  const {
    route,
    navigation: {goBack},
  } = useStackNavigation<RootStackList.UserInfo>();

  const {title} = route.params;
  const isUser = route.params.type === EUserType.P;

  return (
    <AppScreen className="gap-2">
      <View className="flex-row justify-between mt-8">
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-left" />
        </TouchableOpacity>
        <View className="gap-2 items-center">
          <UserImage {...route.params} sizeClassName="w-32 h-32" />
          <Text>{title}</Text>
        </View>
        <View />
      </View>
      <View className="flex-1 gap-2">
        <Text>Status</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          corporis nemo eaque, distinctio qui expedita aut tenetur error.
          Eligendi fugiat fuga neque inventore? Esse, iste neque temporibus
          perspiciatis exercitationem nisi.
        </Text>
        {!isUser && <Text>Members</Text>}
        {!isUser && (
          <View className="flex-1">
            <UserBubbles users={route.params.members} />
          </View>
        )}
      </View>
    </AppScreen>
  );
}
