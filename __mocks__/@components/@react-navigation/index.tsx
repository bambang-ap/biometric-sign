import React from 'react';

import {
  NavigationContainer as NavCont,
  useNavigationContainerRef,
} from '@react-navigation/native';

const NavigationContainer = ({children}: {children: JSX.Element}) => {
  const ref = useNavigationContainerRef();

  const [initialState] = React.useState();

  return (
    <NavCont initialState={initialState} ref={ref}>
      {children}
    </NavCont>
  );
};

export default NavigationContainer;
