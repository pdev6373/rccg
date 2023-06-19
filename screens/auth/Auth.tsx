import {Image, StyleSheet, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Login, Register} from './';
import {Title} from '../../components/auth';
import {Assets, Typographies} from '../../constants';
import {getDeviceDimensions} from '../../utils';
import {Text} from 'react-native';
import {useState} from 'react';

const Tab = createMaterialTopTabNavigator();
const {screenWidth} = getDeviceDimensions();

const LOGO_DIMENSION = 56;

function Auth() {
  const [routeName, setRouteName] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <View style={styles.logoWrapper}>
        <Image source={Assets.Images.logo} style={styles.logo} />
        <Title style={styles.title}>
          {routeName === 'Login' ? 'Login your account' : 'Create your account'}
        </Title>
      </View>

      <Tab.Navigator
        screenOptions={({route}) => {
          setRouteName(route.name);

          return {
            tabBarLabel: ({focused}) => (
              <Text
                style={
                  focused
                    ? styles.tabBarLabelCurrentStyle
                    : styles.tabBarLabelStyle
                }>
                {route.name}
              </Text>
            ),
            tabBarPressOpacity: 1,
            tabBarStyle: styles.tabBarStyle,
            tabBarContentContainerStyle: styles.tabBarContentContainerStyle,
            tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          };
        }}>
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default Auth;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 31,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },

  logoWrapper: {
    alignItems: 'center',
  },

  logo: {
    height: LOGO_DIMENSION,
    width: LOGO_DIMENSION,
  },

  title: {
    marginTop: 20,
    marginBottom: 16.39,
  },

  tabBarStyle: {
    backgroundColor: 'rgba(187, 192, 219, 0.1)',
    borderRadius: 22.4478,
    elevation: 0,
    justifyContent: 'center',
    height: 44.9,
    marginBottom: 15.57,
    overflow: 'hidden',
  },

  tabBarContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabBarIndicatorStyle: {
    backgroundColor: '#fff',
    borderRadius: 17.6716,
    height: 35.34,
    width: screenWidth / 2 - 34,
    marginVertical: 4.78,
    marginHorizontal: 5,
    elevation: 40,
    shadowColor: 'rgba(19, 15, 32, .5)',
    shadowOffset: {
      width: 2,
      height: -2,
    },
  },

  tabBarLabelCurrentStyle: {
    ...Typographies.sBold,
    textTransform: 'capitalize',
    textAlign: 'left',
    color: '#171B2E',
    minWidth: 60,
  },

  tabBarLabelStyle: {
    ...Typographies.s,
    textTransform: 'capitalize',
    color: '#7E8392',
  },
});
