import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ImageSourcePropType,
  StatusBar,
} from 'react-native';
import {Assets, Typographies} from '../../constants';
import {homeNav} from '../../constants/navs';
import {NavProps} from '../../types';
import {useState} from 'react';
import {LocationInput} from '../../components/general/inputs';
import {WrapperWithDarkStatusBar} from '../../components/general/wrappers';
import {getDeviceDimensions} from '../../utils';

const LOGO_DIMENSION = 37;
const SEARCH_DIMENSION = 24;
const NOTIFICATION_DIMENSION = 24;
const FEATURE_ICON_DIMENSION = 20;
const MORE_ICON_DIMENSION = 12;
const NAV_ITEMS = ['Get started', 'My Prayer Tracker'];

const logo = require('../../assets/images/logo.png');
const search = require('../../assets/images/search.png');
const notification = require('../../assets/images/notification.png');
const openHeavens = require('../../assets/images/open-heavens.png');
const radio = require('../../assets/images/radio.png');
const manual = require('../../assets/images/manual.png');
const music = require('../../assets/images/music.png');
const charlets = require('../../assets/images/charlets.png');

type FeaturesType = {
  icon: ImageSourcePropType;
  text: string;
};

const features: FeaturesType[] = [
  {
    icon: radio,
    text: 'Rccg Radio',
  },

  {
    icon: manual,
    text: 'Rccg Manuals',
  },

  {
    icon: music,
    text: 'Rccg Hymns',
  },
  {
    icon: charlets,
    text: 'Rccg Charlets',
  },
];

const {screenWidth} = getDeviceDimensions();

const SERMON_IMAGE_WIDTH = (screenWidth - 48) * 0.9;
const SERMON_IMAGE_HEIGHT = SERMON_IMAGE_WIDTH * 0.545;

export default function Home() {
  const [currentNav, setCurrentNav] = useState<NavProps>(homeNav[0]);
  const isNavTypeGetStarted = currentNav.type === 'get-started';

  const navHighlightStyles = [
    styles.navHighlight,
    isNavTypeGetStarted ? styles.registerHighlight : styles.loginHighlight,
  ];
  const navItemWrapperStyles = isNavTypeGetStarted
    ? styles.currentNavItemWrapper
    : styles.navItemWrapper;
  const navItemStyles = isNavTypeGetStarted
    ? styles.currentNavItem
    : styles.navItem;

  const navChangeHandler = () =>
    setCurrentNav(prev =>
      prev.type === 'get-started' ? homeNav[1] : homeNav[0],
    );

  return (
    <WrapperWithDarkStatusBar
      style={styles.wrapper}
      statusBarColor={'#F8F9FB'}
      showsVerticalScrollIndicator={false}>
      <View style={styles.heading}>
        <View style={styles.headingSection}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.headingText}>Welcome 👋</Text>
        </View>

        <View style={styles.headingSection}>
          <Image source={search} style={styles.search} />
          <Image source={notification} style={styles.notification} />
        </View>
      </View>

      <View style={styles.nav}>
        <View style={navHighlightStyles} />
        {NAV_ITEMS.map(item => (
          <Pressable
            onPress={navChangeHandler}
            style={navItemWrapperStyles}
            key={item}>
            <Text style={navItemStyles}>{item}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.findChurchOuterWrapper}>
        {/* <Text style={styles.findChurchText}>Find an RCCG church near you</Text>

        <LocationInput
          label=""
          placeholder="Enter your location"
          onChange={() => {}}
          value=""
        /> */}

        <View style={styles.findChurchInnerWrapper}>
          <Text style={styles.findChurchText}>
            Find an RCCG church near you
          </Text>

          <LocationInput
            label=""
            placeholder="Enter your location"
            onChange={() => {}}
            value=""
          />
        </View>
      </View>

      <Text style={styles.openHeavensText}>Daily Open Heavens</Text>

      <View style={styles.openHeavensContent}>
        <Image source={openHeavens} style={styles.openHeavensImage} />

        <View style={styles.openHeavensBody}>
          <Text style={styles.openHeavensTitle}>
            Topic: God Is Taking Records.
          </Text>
          <Text style={styles.openHeavensDate}>Date: 31st March 2023</Text>
        </View>
      </View>

      <View style={styles.features}>
        <Text style={styles.featuresText}>Features</Text>

        <Pressable style={styles.moreWrapper}>
          <Text style={styles.featuresText}>More</Text>
          <Image source={Assets.Images.more} style={styles.more} />
        </Pressable>
      </View>

      <View style={styles.featuresList}>
        {features.map((feature, index) => (
          <Pressable style={styles.feature} key={index}>
            <Image source={feature.icon} style={styles.featureIcon} />

            <Text style={styles.featureText}>{feature.text}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView
        horizontal
        alwaysBounceHorizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sermons}
        contentContainerStyle={styles.sermonWrapper}>
        <View style={styles.sermon}>
          <Image source={Assets.Images.sermon} style={styles.sermonImage} />
          <Text style={styles.sermonTitle}>
            Pastor EA Adeboye Sermon Rccg Holy Ghost Service ly Ghost Service
          </Text>
        </View>

        <View style={styles.sermon}>
          <Image source={Assets.Images.sermon} style={styles.sermonImage} />
          <Text style={styles.sermonTitle}>
            Pastor EA Adeboye Sermon Rccg Holy Ghost Service ly Ghost Service
          </Text>
        </View>
      </ScrollView>
    </WrapperWithDarkStatusBar>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    backgroundColor: '#F8F9FB',
    alignItems: 'stretch',
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  headingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  navHighlight: {
    position: 'absolute',
    padding: 7.67,
    backgroundColor: '#fff',
    borderRadius: 17.6716,
    flexBasis: 0,
    flex: 1,
    width: '50%',
    top: 4.78,
    bottom: 4.78,
    elevation: 35,
    shadowColor: 'rgba(19, 15, 32, 0.5)',
  },

  registerHighlight: {
    left: 4.78,
  },

  loginHighlight: {
    right: 4.78,
  },

  headingText: {
    ...Typographies.titleSmall,
    color: '#000',
  },

  logo: {
    height: LOGO_DIMENSION,
    width: LOGO_DIMENSION,
  },

  nav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(187, 192, 219, .1)',
    padding: 4.78,
    borderRadius: 22.4478,
    marginBottom: 15.57,
  },

  currentNavItemWrapper: {
    padding: 7.67,
    borderRadius: 17.6716,
    flexBasis: 0,
    flex: 1,
  },

  navItemWrapper: {
    padding: 7.67,
    flexBasis: 0,
    flex: 1,
  },

  currentNavItem: {
    ...Typographies.sBold,
    color: '#171B2E',
  },

  navItem: {
    ...Typographies.s,
    color: '#7E8392',
  },

  search: {
    height: SEARCH_DIMENSION,
    width: SEARCH_DIMENSION,
  },

  notification: {
    height: NOTIFICATION_DIMENSION,
    width: NOTIFICATION_DIMENSION,
  },

  findChurchOuterWrapper: {
    backgroundColor: '#DBD5F2',
    borderRadius: 20,
    marginBottom: 23,
  },

  findChurchInnerWrapper: {
    backgroundColor: '#372D5B',
    borderRadius: 20,
    paddingTop: 17,
    paddingBottom: 23,
    paddingHorizontal: 20,
    // position: 'absolute',
    // top: 0,
    // width: '100%',
    // left: 0,
    // right: 0,
    // top: 8,
    // zIndex: 2,
  },

  findChurchText: {
    ...Typographies.bodyBold,
    color: '#F8F9FA',
  },

  openHeavensText: {
    ...Typographies.sSemiBold,
    color: '#818487',
    textAlign: 'left',
    marginBottom: 11,
  },

  openHeavensContent: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    gap: 14,
    padding: 11,
    borderRadius: 10,
    marginBottom: 34,
  },

  openHeavensImage: {
    width: 88,
    height: 96,
    borderRadius: 10,
  },

  openHeavensBody: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 9,
    flex: 1,
    gap: 6,
  },

  openHeavensTitle: {
    ...Typographies.bodySemiBold,
    color: '#2A166F',
    textAlign: 'left',
  },

  openHeavensDate: {
    ...Typographies.s,
    color: '#9CA3AF',
  },

  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 23,
  },

  moreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  more: {
    width: MORE_ICON_DIMENSION,
    height: MORE_ICON_DIMENSION,
  },

  featuresText: {
    ...Typographies.sBold,
    lineHeight: 16.8,
    color: '#1A1C1E',
    letterSpacing: 0.56,
  },

  featuresList: {
    gap: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  feature: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 5,
    flexGrow: 1,
  },

  featureIcon: {
    width: FEATURE_ICON_DIMENSION,
    height: FEATURE_ICON_DIMENSION,
  },

  featureText: {
    ...Typographies.sSemiBold,
    color: '#2A166F',
  },

  sermons: {
    marginTop: 32,
    width: screenWidth,
    marginHorizontal: -24,
  },

  sermonWrapper: {
    gap: 18,
    paddingHorizontal: 24,
  },

  sermon: {
    width: SERMON_IMAGE_WIDTH,
  },

  sermonImage: {
    width: '100%',
    height: SERMON_IMAGE_HEIGHT,
    borderRadius: 16,
  },

  sermonTitle: {
    ...Typographies.xs,
    textAlign: 'left',
    color: '#1A1C1E',
    lineHeight: 17,
    letterSpacing: 0.07,
  },
});
