import {useEffect, useRef, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {OptionsDivider} from '../../components/general';
import {Input} from '../../components/general/inputs';
import {Button, GoogleButton} from '../../components/general/buttons';
import {Typographies} from '../../constants';

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  handleChange: any;
};

export default function Login({navigation}: {navigation: any}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const scrollRef = useRef<any>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', () => {
      scrollRef.current?.scrollTo({
        y: 0,
        animated: false,
      });
    });

    return unsubscribe;
  }, [navigation]);

  const inputs: InputProps[] = [
    {
      label: 'Email Address',
      placeholder: 'Email Address',
      value: email,
      handleChange: setEmail,
    },

    {
      label: 'Password',
      placeholder: 'Password',
      value: password,
      handleChange: setPassword,
    },
  ];

  const forgotPasswordHandler = () => navigation.navigate('ForgotPassword');
  const navChangeHandler = async () => {
    await scrollRef.current?.scrollTo({
      y: 0,
      animated: false,
    });

    navigation.navigate('Register');
  };
  const submitHandler = (e: any) => e.preventDefault();

  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={styles.bodyContent}
      showsVerticalScrollIndicator={false}
      ref={scrollRef}>
      <View style={styles.form}>
        {inputs.map(input => (
          <Input
            key={input.label}
            label={input.label}
            placeholder={input.placeholder}
            value={input.value}
            onChange={input.handleChange}
          />
        ))}

        <Pressable
          onPress={forgotPasswordHandler}
          style={styles.forgotPasswordWrapper}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </Pressable>

        <Button style={styles.button} onPress={submitHandler}>
          Login
        </Button>
      </View>

      <OptionsDivider style={styles.optionsDivider} />
      <GoogleButton />

      <Pressable style={styles.actionWrapper} onPress={navChangeHandler}>
        <Text style={styles.action}>Don’t have an account? &nbsp;</Text>
        <Text style={styles.actionAccent}>Sign up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    backgroundColor: '#fff',
  },

  bodyContent: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 31,
  },

  form: {
    width: '100%',
    gap: 24.84,
  },

  forgotPasswordWrapper: {
    alignSelf: 'flex-end',
    marginTop: -11.54,
    marginBottom: -7.61,
    paddingVertical: 5,
  },

  forgotPassword: {
    ...Typographies.sBold,
    color: '#2A166F',
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
    marginTop: 10,
    paddingVertical: 5,
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
