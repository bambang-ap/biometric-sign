import * as React from 'react';
import {Button, View} from 'react-native';

import {useRecoilState} from 'recoil';

import {MenuList} from '@appTypes/navigators.type';
import {atomMenu} from '@recoils';
import {classNames} from '@utils';

export default function MainMenu() {
  const listMenu = Object.values(MenuList);
  const [currentMenu, setMenu] = useRecoilState(atomMenu);

  return (
    <View className="flex-row justify-between">
      {listMenu.map(menu => {
        const isSelected = currentMenu === menu;

        return (
          <View
            key={menu}
            className={classNames('flex-1', {
              ['bg-green-400']: isSelected,
              ['bg-gray-400']: !isSelected,
            })}>
            <Button title={menu} onPress={() => setMenu(menu)} />
          </View>
        );
      })}
    </View>
  );
}
