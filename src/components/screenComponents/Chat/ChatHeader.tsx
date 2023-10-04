import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useForm} from 'react-hook-form';
import {useRecoilState, useResetRecoilState} from 'recoil';

import {Header} from '@appComp/Header';
import {UserImage} from '@appComp/UserImage';
import {RootStackList} from '@appTypes/navigators.type';
import {MessagesRef} from '@appTypes/propsType.type';
import {Icon, Input} from '@components';
import {useListChats} from '@query';
import {atomMessageSearch} from '@recoils';
import {useStackNavigation} from '@utils/navigators';

export default function ChatHeader({scrollToIndex}: MessagesRef) {
  const {dataList} = useListChats();
  const [{isSearching, searchText, currentIndex}, setSearching] =
    useRecoilState(atomMessageSearch);
  const resetMessageSearch = useResetRecoilState(atomMessageSearch);
  const {control, watch, reset} = useForm({defaultValues: {search: ''}});
  const {
    route: {params},
    navigation: {goBack, navigate},
  } = useStackNavigation<RootStackList.Chat>();

  const {search} = watch();

  function toggleIsSearching() {
    setSearching(prev => {
      if (prev.isSearching) reset();
      return {...prev, isSearching: !prev.isSearching};
    });
  }

  function showInfo() {
    navigate(RootStackList.UserInfo, params);
  }

  /**
   * NOTE:
   * In real case, this is not efficient. Because search message will only get data from fetched messages.
   * For more efficiency, I prefer to use BE call to get index of searched message.
   * So, even data is not loaded. the scroll will scrolling into real index and let `InfiniteQuery` do the rest.
   */
  function jumpToMessage(isNext?: true) {
    const listIndex = dataList?.reduce<number[]>((indexes, chat, index) => {
      const hasChar = chat.message
        .toLowerCase()
        .includes(searchText.toLowerCase());
      if (hasChar) indexes.push(index);
      return indexes;
    }, []);

    const current = listIndex?.findIndex(index => index === currentIndex)!;
    const targetIndex =
      current < 0
        ? listIndex?.[0]
        : listIndex?.[isNext ? current + 1 : current - 1] ?? listIndex?.[0];
    scrollToIndex?.(targetIndex!);
    setSearching(prev => ({...prev, currentIndex: targetIndex!}));
  }

  React.useEffect(() => {
    setSearching(prev => ({...prev, searchText: search}));
  }, [search]);

  React.useEffect(() => {
    return () => {
      reset();
      resetMessageSearch();
    };
  }, []);

  return (
    <Header>
      <View className="flex-row gap-x-2 items-center">
        {isSearching ? (
          <View className="flex-row gap-x-2 items-center flex-1">
            <Input
              autoFocus
              control={control}
              fieldName="search"
              placeholder="search..."
              className="border rounded-full flex-1 py-2 px-4"
            />
            <Icon onPress={() => jumpToMessage(true)} name="chevron-up" />
            <Icon onPress={() => jumpToMessage()} name="chevron-down" />
          </View>
        ) : (
          <View className="flex-row items-center gap-2 flex-1">
            <TouchableOpacity
              onPress={goBack}
              className="flex-row gap-2 items-center">
              <Icon name="arrow-left" />
              <View>
                <UserImage {...params} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={showInfo} className="flex-1 h-full">
              <Text>{params.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        <Icon
          onPress={toggleIsSearching}
          name={isSearching ? 'times' : 'search'}
        />
      </View>
    </Header>
  );
}
