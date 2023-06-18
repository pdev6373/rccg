import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '../../../general/buttons';
import {Assets, Typographies} from '../../../../constants';
import {getDeviceDimensions} from '../../../../utils';
import {SuccessProps} from '../../types';
import {WrapperWithDarkStatusBar} from '../../../general/wrappers';

const {screenHeight} = getDeviceDimensions();

const logoMarginBottom = screenHeight / 8.4583;
const successIconMarginBottom = screenHeight / 16.91667;
const bodyMarginBottom = screenHeight / 11.768;
const logoDimension = 56;

export default function Success({
  title,
  message,
  buttonText,
  action,
}: SuccessProps) {
  const loginHandler = () => action('Auth');

  return (
    <WrapperWithDarkStatusBar>
      <Image source={Assets.Images.logo} style={styles.logo} />
      <Image source={Assets.Images.success} style={styles.verifiedSuccess} />
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.body}>{message}</Text>
      <Button onPress={loginHandler}>{buttonText}</Button>
    </WrapperWithDarkStatusBar>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: logoMarginBottom,
    height: logoDimension,
    width: logoDimension,
  },

  verifiedSuccess: {
    marginBottom: successIconMarginBottom,
    width: 218.67,
    height: 136,
  },

  header: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1A1C1E',
    marginBottom: 14,
  },

  body: {
    ...Typographies.body,
    marginBottom: bodyMarginBottom,
    color: '#1A1C1E',
  },
});
