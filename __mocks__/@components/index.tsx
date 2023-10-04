import React from 'react';

import NavigationContainer from './@react-navigation';
import RecoilRoot, {RecoilRootProps} from './recoiljs';

const FullMockComponent = ({children, initState}: RecoilRootProps) => {
  return (
    <RecoilRoot initState={initState}>
      <NavigationContainer>{children}</NavigationContainer>
    </RecoilRoot>
  );
};

export default FullMockComponent;
