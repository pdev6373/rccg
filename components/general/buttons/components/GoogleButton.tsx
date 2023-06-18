import {Pressable, Image, Text, StyleSheet} from 'react-native';
import {Assets, Typographies} from '../../../../constants';

const GOGLE_ICON_DIMENSION = 16;

export default function GoogleButton() {
  return (
    <Pressable style={styles.googleButton}>
      <Image source={Assets.Images.google} style={styles.googleIcon} />
      <Text style={styles.googleText}>Sign up with Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(44, 30, 95, 0.15)',
    borderRadius: 50,
    padding: 16,
    width: '100%',
  },

  googleIcon: {
    height: GOGLE_ICON_DIMENSION,
    width: GOGLE_ICON_DIMENSION,
  },

  googleText: {
    ...Typographies.xsBold,
    color: '#121F3E',
  },
});
