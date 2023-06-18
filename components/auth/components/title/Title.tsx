import {Text, StyleSheet} from 'react-native';
import {TitleProps} from '../../types';
import {Typographies} from '../../../../constants';

export default function Title({children, style}: TitleProps) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    ...Typographies.title,
    color: '#171B2E',
  },
});
