import * as React from 'react';
import {Animated, LayoutRectangle, View} from 'react-native';

import {useRecoilValue} from 'recoil';

import AppScreen from '@appComp/AppScreen';
import {MenuList} from '@appTypes/navigators.type';
import {atomMenu} from '@recoils';
import MainMenu from '@screenComp/Main/MainMenu';

import CallsScreen from './CallsScreen';
import ChatsScreen from './ChatsScreen';
import StatusScreen from './StatusScreen';

export default function MainScreen() {
  return (
    <AppScreen>
      {/* <MainHeader /> */}
      <MainMenu />
      <RenderView />
    </AppScreen>
  );
}

function RenderView() {
  const menu = useRecoilValue(atomMenu);
  const [{width}, setLayout] = React.useState({width: 0} as LayoutRectangle);

  const animValue = React.useRef(new Animated.Value(0)).current;

  const translateX = animValue.interpolate({
    inputRange: [0, 1, 2],
    get outputRange() {
      return this.inputRange.map((val: number) => -(val * width));
    },
  });

  React.useEffect(() => {
    const index = Object.values(MenuList).findIndex(val => val === menu);
    Animated.timing(animValue, {
      duration: 250,
      toValue: index,
      useNativeDriver: true,
    }).start();
  }, [menu, animValue]);

  return (
    <>
      <View onLayout={({nativeEvent: {layout}}) => setLayout(layout)} />
      <Animated.View
        className="flex-1 flex-row"
        style={{width: width * 3, transform: [{translateX}]}}>
        <ChatsScreen />
        <StatusScreen />
        <CallsScreen />
      </Animated.View>
    </>
  );
}
