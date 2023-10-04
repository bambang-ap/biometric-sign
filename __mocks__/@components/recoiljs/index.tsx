import React from 'react';

import {MutableSnapshot, RecoilRoot as RootRecoil} from 'recoil';

export type RecoilRootProps = {
  children: JSX.Element;
  initState?: typeof initializeState;
};

const initializeState = ({set}: MutableSnapshot) => {};

const RecoilRoot = ({children, initState}: RecoilRootProps) => {
  return (
    <RootRecoil
      initializeState={snap => {
        initializeState(snap);
        initState?.(snap);
      }}>
      {children}
    </RootRecoil>
  );
};

export default RecoilRoot;
