import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

import Highlighter from 'react-native-highlight-words';
import {useRecoilValue} from 'recoil';

import {ChatBubbleProps} from '@appTypes/propsType.type';
import {atomMessageSearch} from '@recoils';
import {classNames} from '@utils/index';

import {ReactionBuble} from './ReactionBuble';

export function ChatBubble(chat: ChatBubbleProps) {
  const {id, isYou, message} = chat;
  const [showReaction, setShowReaction] = useState(false);

  const {searchText} = useRecoilValue(atomMessageSearch);

  function showReactionBubble() {
    setShowReaction(true);
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showReaction) timeout = setTimeout(() => setShowReaction(false), 3000);
    return () => clearTimeout(timeout);
  }, [showReaction]);

  return (
    <View
      className={classNames('w-4/5 flex-row gap-2 my-1 self-start', {
        ['self-end justify-end']: isYou,
      })}>
      <TouchableOpacity
        activeOpacity={0.8}
        onLongPress={showReactionBubble}
        className={classNames('bg-slate-500 rounded-xl p-2 self-end', {
          ['bg-green-600']: isYou,
        })}>
        <Text className="text-white">ID: {id}</Text>
        <Highlighter
          suppressHighlighting
          highlightStyle={{backgroundColor: 'yellow', color: 'black'}}
          searchWords={[searchText]}
          textToHighlight={message}
          className="text-white"
        />
        <ReactionBuble
          {...chat}
          show={showReaction}
          hideList={() => setShowReaction(false)}
        />
      </TouchableOpacity>
    </View>
  );
}
