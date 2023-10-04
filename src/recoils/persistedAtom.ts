import ReactNativeRecoilPersist from 'react-native-recoil-persist';
import {atom} from 'recoil';

import {TNotes} from '@appTypes/app.zod';

export const atomNotes = atom<TNotes[]>({
  default: [],
  key: 'atomNotes',
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});
