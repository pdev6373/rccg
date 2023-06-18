import 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  Welcome,
  Auth,
  ConfirmEmail,
  VerifiedSuccessfully,
  ForgotPassword,
  ForgotPasswordOTP,
  ResetPassword,
  ResetPasswordSuccessful,
} from './screens/auth';
import MainNavigation from './navigations/MainNavigation';

const {Navigator, Screen} = createStackNavigator();

function App(): JSX.Element {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) setTimeout(() => SplashScreen.hide(), 1000);
    // if (hasLoaded) SplashScreen.hide();
  }, [hasLoaded]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Welcome" component={Welcome} />
          <Screen name="Auth" component={Auth} />
          <Screen name="ConfirmEmail" component={ConfirmEmail} />
          <Screen
            name="VerifiedSuccessfully"
            component={VerifiedSuccessfully}
          />
          <Screen name="ForgotPassword" component={ForgotPassword} />
          <Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} />
          <Screen name="ResetPassword" component={ResetPassword} />
          <Screen
            name="ResetPasswordSuccessful"
            component={ResetPasswordSuccessful}
          />
          <Screen name="MainNavigation" component={MainNavigation} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
