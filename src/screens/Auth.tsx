import React, {useEffect} from 'react';

import AppScreen from '@appComp/AppScreen';
import {RootStackList} from '@appTypes/navigators.type';
import {StackAction, useStackNavigation} from '@utils/navigators';

export default function AuthScreen() {
  const authenticated = true;
  const {navigation} = useStackNavigation<RootStackList>();

  useEffect(() => {
    if (authenticated) {
      navigation.dispatch(StackAction('push', RootStackList.Notes));
    }
  }, [authenticated]);

  return (
    <AppScreen>
      {/* <Button
        title="Register"
        onPress={async () => biometry.register().then(e => console.log(e))}
      />
      <Button
        title="Login"
        onPress={async () => biometry.prompt().then(e => console.log(e))}
      />
      <Button
        title="Delete"
        onPress={async () => biometry.deleteKeys().then(e => console.log(e))}
      /> */}
    </AppScreen>
  );
}
