import 'global-methods';
import 'react-native/jest/setup';
import 'react-native-gesture-handler/jestSetup';

import './global';
import './react-native-reanimated';

import {jest} from '@jest/globals';

const {fn, mock} = jest;

mock('react-native-safe-area', () => ({safeAreaInsets: {top: 0, bottom: 0}}));
mock('react-native-screens', () => ({enableScreens: fn()}));
