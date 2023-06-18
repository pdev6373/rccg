import {Pressable, StyleSheet, Text} from 'react-native';
import {Typographies} from '../../../../constants';
import {ButtonProps} from '../types';

export default function WelcomeButton({children, style, onPress}: ButtonProps) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#28166F',
    borderRadius: 40,
    padding: 18,
    width: '100%',
  },

  buttonText: {
    ...Typographies.welcomeButton,
    color: '#fff',
  },
});
