import {Image, StyleSheet, Text, View} from 'react-native';
import {Input} from '../../components/general/inputs';
import {useState} from 'react';
import {Button} from '../../components/general/buttons';
import {getDeviceDimensions} from '../../utils';
import {Title} from '../../components/auth';
import {Assets, Typographies} from '../../constants';
import {WrapperWithDarkStatusBar} from '../../components/general/wrappers';

const {windowHeight} = getDeviceDimensions();

const LOGO_DIMENSION = 56;
const LEFT_ARROW_DIMENSION = 32;

export default function ForgotPassword({navigation}: {navigation: any}) {
  const [email, setEmail] = useState('');

  const submitHandler = () => navigation.navigate('ForgotPasswordOTP');

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
        Enter your email address to reset your {'\n'} password
      </Text>

      <Input
        label="Email address"
        placeholder="Email Address"
        onChange={setEmail}
        value={email}
      />

      <Button style={styles.submit} onPress={submitHandler}>
        Submit
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

  submit: {
    marginTop: 'auto',
    width: '100%',
  },
});
