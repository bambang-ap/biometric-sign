import 'global-methods';

import React from 'react';
import {StatusBar} from 'react-native';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RecoilRoot} from 'recoil';

import RootStackNavigator from './navigators';

export const queryClient = new QueryClient();

function App() {
  const ref = useNavigationContainerRef();

  const [initialState] = React.useState();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <NavigationContainer initialState={initialState} ref={ref}>
            <RootStackNavigator />
          </NavigationContainer>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
