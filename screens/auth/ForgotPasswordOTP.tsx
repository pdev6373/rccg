import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components/general/buttons';
import OtpInputs from 'react-native-otp-inputs';
import {Title} from '../../components/auth';
import {Assets, Typographies} from '../../constants';
import {WrapperWithDarkStatusBar} from '../../components/general/wrappers';

const LOGO_DIMENSION = 56;
const OTP_DIMENSION = 56;
const LEFT_ARROW_DIMENSION = 32;

export default function ForgotPasswordOTP({navigation}: {navigation: any}) {
  const verifyHandler = () => navigation.navigate('ResetPassword');

  return (
    <WrapperWithDarkStatusBar>
      <View style={styles.logoWrapper}>
        <Image source={Assets.Images.goBack} style={styles.leftArrow} />
        <Image source={Assets.Images.logo} style={styles.logo} />
      </View>

      <View style={styles.title}>
        <Title>Forgot Password</Title>
      </View>

      <Text style={styles.forgotPassword}>
        We have to send the verification to your email{' '}
        <Text style={styles.forgotPasswordAccent}>mic****@mail.com</Text>
      </Text>

      <View style={styles.inputContainer}>
        <OtpInputs
          inputContainerStyles={styles.OTPContainer}
          inputStyles={styles.OTPInput}
          focusStyles={styles.OTPFocusedInput}
          handleChange={code => console.log(code)}
          numberOfInputs={5}
          autofillFromClipboard={true}
          clearTextOnFocus={true}
          {...styles.OTPTextInput}
        />
      </View>

      <Button style={styles.submit} onPress={verifyHandler}>
        Verify
      </Button>
    </WrapperWithDarkStatusBar>
  );
}

const styles = StyleSheet.create({
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
    minHeight: 56,
  },

  leftArrow: {
    height: LEFT_ARROW_DIMENSION,
    width: LEFT_ARROW_DIMENSION,
    position: 'absolute',
    left: 0,
    top: -13,
  },

  logo: {
    height: LOGO_DIMENSION,
    width: LOGO_DIMENSION,
  },

  title: {
    marginBottom: 12,
  },

  forgotPassword: {
    ...Typographies.s,
    color: '#9CA3AF',
    marginBottom: 37.85,
  },

  forgotPasswordAccent: {
    color: '#111827',
  },

  inputContainer: {
    flexDirection: 'row',
  },

  OTPContainer: {
    backgroundColor: '#EEF3F8',
    width: OTP_DIMENSION,
    height: OTP_DIMENSION,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EEF3F8',
  },

  OTPInput: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
    letterSpacing: -0.2,
    borderRadius: 16,
  },

  OTPFocusedInput: {
    backgroundColor: '#fff',
    borderColor: '#2A166F',
    borderRadius: 16,
  },

  OTPTextInput: {
    color: '#111827',
    selectionColor: '#fff',
    cursorColor: '#fff',
  },

  submit: {
    marginTop: 'auto',
    width: '100%',
  },
});
