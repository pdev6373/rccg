import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {InputProps} from '../types';
import {Typographies} from '../../../../constants';

const cursorColor = '#171B2E';
const placeholderTextColor = '#DADEE3';

export default function Input({
  placeholder,
  value,
  onChange,
  label,
  type = 'text',
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  const isPassword = type === 'password' ? true : false;
  const inputStyle = [
    styles.input,
    isFocused ? styles.focusedInput : styles.bluredInput,
  ];

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}</Text>

      <View>
        <TextInput
          cursorColor={cursorColor}
          selectionColor={placeholderTextColor}
          onFocus={focusHandler}
          onBlur={blurHandler}
          secureTextEntry={isPassword}
          placeholderTextColor={placeholderTextColor}
          style={inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    gap: 8.66,
  },

  inputLabel: {
    ...Typographies.label,
    textAlign: 'left',
    color: '#171B2E',
  },

  input: {
    ...Typographies.s,
    textAlign: 'left',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 28.6567,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#171B2E',
  },

  focusedInput: {
    borderColor: '#2A166F',
  },

  bluredInput: {
    borderColor: 'rgba(44, 30, 95, 0.15)',
  },
});
