import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getDeviceDimensions} from '../../utils';
import {Title} from '../../components/auth';
import {Assets, Typographies} from '../../constants';
import {WrapperWithDarkStatusBar} from '../../components/general/wrappers';

const LOGO_DIMENSION = 56;
const SMALL_MAIL_DIMENSION = 18;
const LEFT_ARROW_DIMENSION = 32;

export default function ConfirmEmail({navigation}: {navigation: any}) {
  const goBackHandler = () => navigation.goBack();

  return (
    <WrapperWithDarkStatusBar>
      <View style={styles.logoWrapper}>
        <Pressable style={styles.leftArrowWrapper} onPress={goBackHandler}>
          <Image source={Assets.Images.goBack} style={styles.leftArrow} />
        </Pressable>

        <Image source={Assets.Images.logo} style={styles.logo} />
      </View>

      <View style={styles.title}>
        <Title>Confirm Email</Title>
      </View>

      <Image source={Assets.Images.mail} style={styles.mail} />

      <Text style={styles.body}>
        We sent a message to {'\n'}
        <Text style={styles.bodyAccent}>victorvax@gmail.com</Text>. Tap the link
        in that email to confirm that’s you.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.resendText}>
          Didn’t see the link? Kindly check your spam folder or click resend
          below
        </Text>

        <Pressable style={styles.resendMail}>
          <Image source={Assets.Images.message} style={styles.mail_small} />
          <Text style={styles.resendMailText}>RESEND ACCOUNT VERIFICATION</Text>
        </Pressable>
      </View>
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

  leftArrowWrapper: {
    position: 'absolute',
    left: 0,
    top: -13,
  },

  leftArrow: {
    height: LEFT_ARROW_DIMENSION,
    width: LEFT_ARROW_DIMENSION,
  },

  logo: {
    height: LOGO_DIMENSION,
    width: LOGO_DIMENSION,
  },

  title: {
    marginBottom: 68,
  },

  mail: {
    height: 128,
    width: 127.17,
  },

  body: {
    ...Typographies.body,
    color: '#1A1C1E',
    marginVertical: 27,
  },

  bodyAccent: {
    fontWeight: '600',
  },

  footer: {
    marginTop: 'auto',
    gap: 41,
  },

  resendText: {
    ...Typographies.s,
    color: '#9CA3AF',
  },

  resendMail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  mail_small: {
    width: SMALL_MAIL_DIMENSION,
    height: SMALL_MAIL_DIMENSION,
  },

  resendMailText: {
    ...Typographies.xs,
    color: '#2A166F',
  },
});
