import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {TChat} from '@appTypes/data.type';
import {Icon} from '@components';
import {REACTIONS} from '@constants';
import {classNames} from '@utils/index';
export function ReactionBuble({
  isYou,
  show,
  hideList,
}: TChat & {show?: boolean; hideList: NoopVoid}) {
  const [reaction, setReaction] = useState<string>();

  function pickReaction(smiley: string) {
    setReaction(smiley);
    hideList();
  }

  return (
    <>
      {show && (
        <View
          className={classNames('absolute z-50 bottom-0', {
            ['left-0']: isYou,
            ['right-0']: !isYou,
          })}>
          <View
            className={classNames(
              'absolute w-28 gap-y-2 flex-row flex-wrap bottom-2',
              {
                ['left-0']: isYou,
                ['right-0']: !isYou,
              },
            )}>
            {REACTIONS.map(smiley => {
              return (
                <View className="w-1/4 items-center">
                  <TouchableOpacity
                    key={smiley}
                    onPress={() => pickReaction(smiley)}
                    className="bg-gray-300 items-center justify-center w-6 h-6 rounded-full">
                    <Icon name={smiley} className="text-lg" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      )}
      {!!reaction && (
        <>
          <View
            className={classNames('absolute bottom-2', {
              ['left-4']: !isYou,
              ['right-4']: isYou,
            })}>
            <View className="bg-white items-center justify-center w-6 h-6 rounded-full">
              <Icon name={reaction} />
            </View>
          </View>
          <View className="p-4" />
        </>
      )}
    </>
  );
}
