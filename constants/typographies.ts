type typographyType = {
  fontSize: number;
  fontWeight: '300' | '400' | '500' | '600' | '700' | '800' | '900';
  lineHeight: number;
  textAlign: 'center';
  letterSpacing?: number;
};

type typographiesType = {
  body: typographyType;
  bodySemiBold: typographyType;
  bodyBold: typographyType;
  title: typographyType;
  titleSmall: typographyType;
  welcomeButton: typographyType;
  mainButton: typographyType;
  label: typographyType;
  xs: typographyType;
  xsBold: typographyType;
  s: typographyType;
  sSemiBold: typographyType;
  sBold: typographyType;
  l: typographyType;
  xl: typographyType;
  xxl: typographyType;
};

const Typographies: typographiesType = {
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },

  bodySemiBold: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },

  bodyBold: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    letterSpacing: 0.48,
    textAlign: 'center',
  },

  titleSmall: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: 0.2125,
    textAlign: 'center',
  },

  welcomeButton: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    textAlign: 'center',
  },

  mainButton: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    textAlign: 'center',
  },

  label: {
    fontSize: 13.3731,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
  },

  xs: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'center',
  },

  xsBold: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 19,
    textAlign: 'center',
  },

  s: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center',
  },

  sSemiBold: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    textAlign: 'center',
  },

  sBold: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'center',
  },

  l: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 37,
    textAlign: 'center',
  },

  xl: {
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 40,
    textAlign: 'center',
  },

  xxl: {
    fontSize: 40,
    fontWeight: '900',
    lineHeight: 53.21,
    textAlign: 'center',
  },
};

export default Typographies;
