import {Image, StyleSheet, Text, View} from 'react-native';
import {Input} from '../../components/general/inputs';
import {useState} from 'react';
import {Button} from '../../components/general/buttons';
import {getDeviceDimensions} from '../../utils';
import {Assets, Typographies} from '../../constants';
import {Title} from '../../components/auth';
import {WrapperWithDarkStatusBar} from '../../components/general/wrappers';

const {windowHeight} = getDeviceDimensions();

const LOGO_DIMENSION = 56;
const LEFT_ARROW_DIMENSION = 32;

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  handleChange: any;
};

export default function ResetPassword({navigation}: {navigation: any}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputs: InputProps[] = [
    {
      label: 'Password',
      placeholder: 'Password',
      handleChange: setPassword,
      value: password,
    },

    {
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      handleChange: setConfirmPassword,
      value: confirmPassword,
    },
  ];

  const changePasswordHandler = () =>
    navigation.navigate('ResetPasswordSuccessful');

  return (
    <WrapperWithDarkStatusBar>
      <View style={styles.logoWrapper}>
        <Image source={Assets.Images.goBack} style={styles.leftArrow} />
        <Image source={Assets.Images.logo} style={styles.logo} />
      </View>

      <View style={styles.title}>
        <Title>Reset Password</Title>
      </View>

      <Text style={styles.forgotPassword}>
        Enter a new password for your account
      </Text>

      <View style={styles.inputWrapper}>
        {inputs.map(input => (
          <Input
            key={input.label}
            label={input.label}
            placeholder={input.placeholder}
            onChange={input.handleChange}
            value={input.value}
          />
        ))}
      </View>

      <Button style={styles.submit} onPress={changePasswordHandler}>
        Change Password
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

  inputWrapper: {
    width: '100%',
    gap: 24.84,
  },

  submit: {
    marginTop: 37.3,
    width: '100%',
  },
});
