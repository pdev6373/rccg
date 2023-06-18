import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bible, Discover, DoveTV, Home, More} from '../screens/general';
import {Assets, Typographies} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {Navigator, Screen} = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },

        tabBarLabelStyle: {
          ...Typographies.xs,
          marginBottom: 11,
          // color: '#5D5FEF',
          marginTop: -10,
        },
        headerShadowVisible: false,
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            // <Image
            //   source={Assets.Images.home}
            //   style={{
            //     backgroundColor: '#fff',
            //     width: 24,
            //     height: 24,
            //   }}
            // />
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="DoveTV"
        component={DoveTV}
        options={{
          tabBarLabel: 'Dove TV',
          tabBarIcon: ({color, size}) => (
            // <Image
            //   source={Assets.Images.tv}
            //   style={{
            //     backgroundColor: '#fff',
            //     width: 24,
            //     height: 24,
            //   }}
            // />
            <MaterialIcons name="live_tv" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Bible"
        component={Bible}
        options={{
          tabBarLabel: 'Bible',
          tabBarIcon: ({color, size}) => (
            // <Image
            //   source={Assets.Images.bible}
            //   style={{
            //     backgroundColor: '#fff',
            //     width: 24,
            //     height: 24,
            //   }}
            // />
            <FontAwesome5 name="bible" size={size * 0.8} color={color} />
          ),
        }}
      />

      <Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="menu" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
