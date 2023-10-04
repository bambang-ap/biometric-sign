import * as React from 'react';
import {RefreshControl, TouchableOpacity, View} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {Icon} from 'src/components/base/Icon';

import {ChatBubble} from '@appComp/ChatBubble';
import {TChat} from '@appTypes/data.type';
import {MessagesRef} from '@appTypes/propsType.type';
import {useListChats} from '@query';

const Messages = React.forwardRef<MessagesRef>(function Messages(_props, ref) {
  const listRef = React.useRef<FlashList<TChat>>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const {dataList, isFetchingNextPage, hasNextPage, fetchNextPage} =
    useListChats();

  function loadMore() {
    if (hasNextPage) fetchNextPage();
  }

  function scrollToDown() {
    listRef.current?.scrollToIndex({index: 0, animated: true});
  }

  React.useImperativeHandle(ref, () => {
    return {
      scrollToIndex: index =>
        listRef.current?.scrollToIndex({index, animated: true}),
    };
  });

  return (
    <View className="flex-1">
      {isScrolled && (
        <TouchableOpacity
          className="justify-center items-center absolute rounded-full bg-slate-800 p-2 bottom-2 right-3 z-10"
          onPress={scrollToDown}>
          <Icon name="chevron-down" className="text-white" />
        </TouchableOpacity>
      )}
      <FlashList
        inverted
        ref={listRef}
        data={dataList}
        estimatedItemSize={69}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={item => item?.id}
        renderItem={({item}) => <ChatBubble {...item} />}
        refreshControl={<RefreshControl refreshing={isFetchingNextPage} />}
        onScroll={({
          nativeEvent: {
            contentOffset: {y},
          },
        }) => setIsScrolled(y > 0)}
      />
    </View>
  );
});

export default Messages;
