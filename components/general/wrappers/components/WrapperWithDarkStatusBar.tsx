import {StatusBar, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getDeviceDimensions} from '../../../../utils';

const {windowHeight} = getDeviceDimensions();

export default function WrapperWithDarkStatusBar({
  children,
  style,
  statusBarColor = '#fff',
  showsVerticalScrollIndicator = true,
}: {
  children: any;
  style?: any;
  statusBarColor?: string;
  showsVerticalScrollIndicator?: boolean;
}) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={statusBarColor} barStyle={'dark-content'} />

      <ScrollView
        contentContainerStyle={[styles.wrapper, style]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: windowHeight,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 31,
    backgroundColor: '#fff',
    width: '100%',
  },
});
