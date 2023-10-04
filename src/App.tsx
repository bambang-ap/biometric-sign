import 'global-methods';

import React from 'react';
import {StatusBar} from 'react-native';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from 'react-native-recoil-persist';
import {RecoilRoot} from 'recoil';

import RootStackNavigator from './navigators';

function App() {
  const ref = useNavigationContainerRef();

  const [initialState] = React.useState();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <RecoilRoot>
        <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
          <NavigationContainer initialState={initialState} ref={ref}>
            <RootStackNavigator />
          </NavigationContainer>
        </ReactNativeRecoilPersistGate>
      </RecoilRoot>
    </>
  );
}

export default App;
