import ReactNativeBiometrics, {
  BiometryType,
  Biometrics as Bio,
  TouchID,
} from 'react-native-biometrics';

export class Biometrics {
  rnBiometrics: ReactNativeBiometrics;
  keysExist?: boolean;
  biometry?: {
    enabled: boolean;
    type?: BiometryType;
  };

  constructor() {
    this.rnBiometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });
    // setTimeout(() => this.check().then(this.checkKeys), 2500);
  }

  async deleteKeys() {
    const {keysDeleted} = await this.rnBiometrics.deleteKeys();
    await this.checkKeys();
    return keysDeleted;
  }

  public async check() {
    const {available, biometryType} =
      await this.rnBiometrics.isSensorAvailable();

    if (available) this.biometry = {enabled: available, type: biometryType};

    return {available, biometryType};
  }

  public async checkKeys() {
    const {keysExist} = await this.rnBiometrics.biometricKeysExist();

    this.keysExist = keysExist;

    return keysExist;
  }

  async register() {
    const allowed = [Bio, TouchID] as BiometryType[];
    if (!this.biometry?.enabled) return false;
    if (!this.keysExist) return 'Registered' as const;
    if (allowed.includes(this.biometry.type!)) return false;

    const epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    const payload = epochTimeSeconds + ' registered';

    const signature = await this.rnBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload,
    });

    this.checkKeys();

    return signature;
  }

  async prompt() {
    const {success} = await this.rnBiometrics.simplePrompt({
      promptMessage: 'Sign In',
    });

    return success;
  }
}
