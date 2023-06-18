import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WelcomeButton} from '../../components/general/buttons';
import {Assets, Typographies} from '../../constants';
import {getDeviceDimensions} from '../../utils';

const {screenHeight} = getDeviceDimensions();

const LOGO_DIMENSION = 81;
const WRAPPER_VERTICAL_PADDING = screenHeight / 8.2;
const LOGO_MARGIN_TOP = screenHeight / 9.02;
const LOGO_MARGIN_BOTTOM = screenHeight / 6.39;

export default function Welcome({navigation}: {navigation: any}) {
  const getStartedHandler = () => navigation.navigate('Auth');

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />

      <ImageBackground
        source={Assets.Images.welcomeBackground}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <ScrollView contentContainerStyle={styles.wrapper}>
          <View style={styles.contentWrapper}>
            <Image source={Assets.Images.logo} style={styles.logo} />

            <View style={styles.welcomeTextrapper}>
              <Text style={styles.welcomeText}>Welcome to 👋</Text>
              <Text style={styles.welcomeTextBold}>My Rccg App</Text>
            </View>

            <Text style={styles.mainText}>
              Hi there! Welcome to your personalized RCCG App, it”s created just
              to make your Rccg membership delightful.
            </Text>
          </View>

          <WelcomeButton style={styles.button} onPress={getStartedHandler}>
            Get Started
          </WelcomeButton>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: screenHeight,
    width: '100%',
  },

  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: WRAPPER_VERTICAL_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentWrapper: {
    paddingHorizontal: 17,
    marginBottom: 38,
    alignItems: 'center',
  },

  logo: {
    height: LOGO_DIMENSION,
    width: LOGO_DIMENSION,
    marginTop: LOGO_MARGIN_TOP,
    marginBottom: LOGO_MARGIN_BOTTOM,
  },

  welcomeTextrapper: {
    marginBottom: 23,
  },

  welcomeText: {
    ...Typographies.xl,
    color: '#fff',
  },

  welcomeTextBold: {
    ...Typographies.xxl,
    color: '#fff',
  },

  mainText: {
    ...Typographies.s,
    color: '#BEBEBE',
  },

  button: {
    marginTop: 'auto',
  },
});
