import {StatusBar, StyleSheet, View} from 'react-native';

export default function WrapperWithLightStatusBar({
  children,
  style,
}: {
  children: any;
  style?: any;
}) {
  return (
    <View style={[styles.wrapper, style]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'light-content'} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 31,
    backgroundColor: '#fff',
    width: '100%',
  },
});
