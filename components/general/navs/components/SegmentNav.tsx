import {View, StyleSheet} from 'react-native';

type NavWrapperType = {
  children: any;
  navPosition: 'first' | 'second';
};

export default function SegmentNav({children, navPosition}: NavWrapperType) {
  console.log(navPosition);

  const navHighlightStyles = [
    styles.navHighlight,
    navPosition === 'first' ? styles.firstHighlight : styles.secondHighlight,
  ];

  return (
    <View style={styles.nav}>
      <View style={navHighlightStyles} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(187, 192, 219, .1)',
    padding: 4.78,
    borderRadius: 22.4478,
    width: '100%',
    marginBottom: 15.57,
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

  firstHighlight: {
    left: 4.78,
  },

  secondHighlight: {
    right: 4.78,
  },
});
