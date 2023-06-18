import {View, Text, StyleSheet} from 'react-native';
import {Typographies} from '../../constants';

type OptionsDividerProps = {
  style: any;
};

export default function OptionsDivider({style}: OptionsDividerProps) {
  return (
    <View style={[styles.options, style]}>
      <View style={styles.line} />
      <Text style={styles.optionsText}>Or continue with</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionsText: {
    ...Typographies.xs,
    color: '#595C68',
    letterSpacing: 0.48,
    paddingHorizontal: 8,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6E8EC',
  },
});
