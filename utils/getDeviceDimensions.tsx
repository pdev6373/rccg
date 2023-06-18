import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export default function getDeviceDimensions() {
  return {windowHeight, windowWidth, screenHeight, screenWidth};
}
