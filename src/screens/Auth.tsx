import React from 'react';
import {Button} from 'react-native';

import ReactNativeBiometrics from 'react-native-biometrics';

import AppScreen from '@appComp/AppScreen';
import {RootStackList} from '@appTypes/navigators.type';
import {StackAction, useStackNavigation} from '@utils/navigators';

export default function AuthScreen() {
  const {navigation} = useStackNavigation<RootStackList>();

  function navigate() {
    navigation.dispatch(StackAction('replace', RootStackList.Notes));
  }

  async function simplePrompt() {
    const rnBiometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });

    const {success} = await rnBiometrics.simplePrompt({
      promptMessage: 'Sign In 1',
    });

    if (!success) return;

    navigate();
  }

  async function createSignature() {
    const rnBiometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });
    const epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    const payload = epochTimeSeconds + ' registered';

    const {success} = await rnBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload,
    });

    if (!success) return;

    navigate();
  }

  async function signIn() {
    try {
      await createSignature();
    } catch (err1) {
      console.log(err1);
      try {
        await simplePrompt();
      } catch (err2) {
        console.log(err2);
      }
    }
  }

  return (
    <AppScreen>
      <Button title="Sign In" onPress={signIn} />
    </AppScreen>
  );
}
