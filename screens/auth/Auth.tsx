import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useState, useRef} from 'react';
import {Input} from '../../components/general/inputs';
import {Button, GoogleButton} from '../../components/general/buttons';
import {Title} from '../../components/auth';
import {Assets, Typographies} from '../../constants';
import {authNav} from '../../constants/navs';
import {AuthNavProps} from '../../types';
import {SegmentNav} from '../../components/general/navs';
import {OptionsDivider} from '../../components/general';
import {getDeviceDimensions} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const LOGO_DIMENSION = 56;
const NAV_ITEMS = ['register', 'login'];

type ContentType = {
  title: 'Create your account' | 'Login your account';
  buttonText: 'Create Account' | 'Login';
  actionText: 'Already have an account? ' | 'Don’t have an account? ';
  actionTextAccent: 'Sign in' | 'Sign up';
};

type ContentsType = {
  register: ContentType;
  login: ContentType;
};

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  handleChange: any;
  navType: 'all' | 'register' | 'login';
};

const contents: ContentsType = {
  register: {
    title: 'Create your account',
    buttonText: 'Create Account',
    actionText: 'Already have an account? ',
    actionTextAccent: 'Sign in',
  },

  login: {
    title: 'Login your account',
    buttonText: 'Login',
    actionText: 'Don’t have an account? ',
    actionTextAccent: 'Sign up',
  },
};

const {screenHeight} = getDeviceDimensions();

export default function Auth({navigation}: {navigation: any}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentNav, setCurrentNav] = useState<AuthNavProps>(authNav[0]);
  const isNavTypeRegister = currentNav.type === 'register';
  const scrollRef = useRef<any>();

  const inputs: InputProps[] = [
    {
      label: 'First Name',
      placeholder: 'First Name',
      value: firstname,
      handleChange: setFirstname,
      navType: 'register',
    },

    {
      label: 'Last Name',
      placeholder: 'Last Name',
      value: lastname,
      handleChange: setLastname,
      navType: 'register',
    },

    {
      label: 'Email Address',
      placeholder: 'Email Address',
      value: email,
      handleChange: setEmail,
      navType: 'all',
    },

    {
      label: 'Password',
      placeholder: 'Password',
      value: password,
      handleChange: setPassword,
      navType: 'all',
    },
  ];

  const formInputs = inputs
    .filter(
      input => input.navType === 'all' || input.navType === currentNav.type,
    )
    .map(input => (
      <Input
        key={input.label}
        label={input.label}
        placeholder={input.placeholder}
        value={input.value}
        onChange={input.handleChange}
      />
    ));

  const forgotPasswordHandler = () => navigation.navigate('ForgotPassword');

  const forgotPassword = !isNavTypeRegister && (
    <Pressable onPress={forgotPasswordHandler}>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </Pressable>
  );

  const navItemStyles = (item: any) => {
    console.log(item);

    return currentNav.type === item ? styles.currentNavItem : styles.navItem;
  };

  const navChangeHandler = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false,
    });

    setCurrentNav(prev => (prev.type === 'register' ? authNav[1] : authNav[0]));
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    currentNav.type === 'login'
      ? navigation.navigate('MainNavigation')
      : navigation.navigate('ConfirmEmail');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <Image source={Assets.Images.logo} style={styles.logo} />
      <Title style={styles.title}>{contents[currentNav.type].title}</Title>

      <SegmentNav navPosition={currentNav.position}>
        {NAV_ITEMS.map(item => (
          <Pressable
            onPress={navChangeHandler}
            style={styles.navItemWrapper}
            key={item}>
            <Text style={navItemStyles(item)}>{item}</Text>
          </Pressable>
        ))}
      </SegmentNav>

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}>
        <View style={styles.form}>
          {formInputs}
          {forgotPassword}

          <Button style={styles.button} onPress={submitHandler}>
            {contents[currentNav.type].buttonText}
          </Button>
        </View>

        <OptionsDivider style={styles.optionsDivider} />
        <GoogleButton />

        <Pressable style={styles.actionWrapper} onPress={navChangeHandler}>
          <Text style={styles.action}>
            {contents[currentNav.type].actionText}
          </Text>

          <Text style={styles.actionAccent}>
            {contents[currentNav.type].actionTextAccent}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: screenHeight,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 31,
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },

  logo: {
    height: LOGO_DIMENSION,
    width: LOGO_DIMENSION,
  },

  title: {
    marginTop: 20,
    marginBottom: 16.39,
  },

  body: {
    width: '100%',
  },

  bodyContent: {
    paddingBottom: 31,
  },

  form: {
    width: '100%',
    gap: 24.84,
    paddingTop: 15,
  },

  forgotPassword: {
    ...Typographies.sBold,
    color: '#2A166F',
    alignSelf: 'flex-end',
    marginTop: -6.54,
    marginBottom: -2.61,
  },

  button: {
    marginTop: 7.77,
  },

  optionsDivider: {
    marginTop: 32,
    marginBottom: 15,
  },

  actionWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  action: {
    ...Typographies.s,
    color: '#7E8392',
  },

  actionAccent: {
    ...Typographies.sBold,
    color: '#2A166F',
  },

  currentNavItem: {
    ...Typographies.sBold,
    color: '#171B2E',
    textTransform: 'capitalize',
  },

  navItem: {
    ...Typographies.s,
    color: '#7E8392',
    textTransform: 'capitalize',
  },

  navItemWrapper: {
    borderRadius: 17.6716,
    padding: 7.67,
    flexBasis: 0,
    flex: 1,
  },
});
