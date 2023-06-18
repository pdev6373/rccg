import {Text, View, Image, Pressable, StyleSheet} from 'react-native';
import {Assets, Typographies} from '../../constants';
import {getDeviceDimensions} from '../../utils';

const {screenWidth} = getDeviceDimensions();

export default function DoveTV() {
  return (
    <View>
      <Image source={Assets.Images.tvImage} style={styles.thumbnail} />

      <View style={styles.topWrapper}>
        <View style={styles.top}>
          <View style={styles.logoWrapper}>
            <Image source={Assets.Images.logoTwo} style={styles.logo} />
            <Text style={styles.logoText}>Dove TV</Text>
          </View>

          <View style={styles.shareWrapper}>
            <Text style={styles.shareText}>Share</Text>
            <Image source={Assets.Images.share} style={styles.shareIcon} />
          </View>
        </View>

        <Text style={styles.topText}>
          World Dove Media is a Christian family entertainment multimedia
          company with a focus to develop life changing media products on all
          platforms including satellite, cable, free to air.
        </Text>
      </View>

      <View>
        <View>
          <Text>Rccg Programs</Text>
          <Text>View all</Text>
        </View>

        <View>
          <Pressable>
            <Text>All</Text>
          </Pressable>

          <Pressable>
            <Text>Live Programs</Text>
          </Pressable>

          <Pressable>
            <Text>Pastor EA Sermons</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: screenWidth,
    height: screenWidth * 0.637,
  },

  topWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: '#EDEDED',
    gap: 13,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  logoText: {
    ...Typographies.mainButton,
    letterSpacing: 0.2,
    color: '#1A1C1E',
  },

  shareWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  shareText: {
    ...Typographies.s,
    color: '#1A1C1E',
    letterSpacing: 0.2,
  },

  logo: {
    width: 38,
    height: 39,
  },

  shareIcon: {
    width: 24,
    height: 24,
  },

  topText: {
    ...Typographies.s,
    color: '#818487',
    textAlign: 'left',
    letterSpacing: 0.5,
  },
});
