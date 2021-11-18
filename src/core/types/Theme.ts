import * as React from 'react';
import {ColorValue, ImageSourcePropType, TextStyle} from 'react-native';

export interface ThemeWeights {
  text: TextStyle['fontWeight'];
  h1?: TextStyle['fontWeight'];
  h2?: TextStyle['fontWeight'];
  h3?: TextStyle['fontWeight'];
  h4?: TextStyle['fontWeight'];
  h5?: TextStyle['fontWeight'];
  p?: TextStyle['fontWeight'];

  thin: TextStyle['fontWeight'];
  extralight: TextStyle['fontWeight'];
  light: TextStyle['fontWeight'];
  normal: TextStyle['fontWeight'];
  medium: TextStyle['fontWeight'];
  semibold?: TextStyle['fontWeight'];
  bold?: TextStyle['fontWeight'];
  extrabold?: TextStyle['fontWeight'];
  black?: TextStyle['fontWeight'];
}

export interface ITheme {
  colors: ThemeColors;
  assets: ThemeAssets & ThemeIcons;
  icons: ThemeIcons;
  fonts: ThemeFonts;
  weights: ThemeWeights;
}
export interface ICommonTheme {
  assets: ThemeAssets & ThemeIcons;
  icons: ThemeIcons;
  fonts: ThemeFonts;
  weights: ThemeWeights;
}

export interface IThemeProvider {
  children?: React.ReactNode;
  theme?: ITheme;
  setTheme?: (theme?: ITheme) => void;
}

export interface ThemeColors {
  text: ColorValue;
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  black: ColorValue;
  white: ColorValue;
  light: ColorValue;
  dark: ColorValue;
  gray: ColorValue;
  danger: ColorValue;
  warning: ColorValue;
  success: ColorValue;
  info: ColorValue;
  card: ColorValue;
  background: ColorValue;
  shadow: ColorValue;
  overlay: ColorValue;
  focus: ColorValue;
  input: ColorValue;
  switchOn: ColorValue;
  switchOff: ColorValue;
  checkbox: string[];
  checkboxIcon: ColorValue;
  icon: ColorValue;
  blurTint: 'light' | 'dark' | 'default';
  link: ColorValue;
}

export interface ThemeIcons {
  arrow: ImageSourcePropType;
  basket: ImageSourcePropType;
  calendar: ImageSourcePropType;
  check: ImageSourcePropType;
  clock: ImageSourcePropType;
  close: ImageSourcePropType;
  components: ImageSourcePropType;
  document: ImageSourcePropType;
  extras: ImageSourcePropType;
  home: ImageSourcePropType;
  image: ImageSourcePropType;
  location: ImageSourcePropType;
  menu: ImageSourcePropType;
  more: ImageSourcePropType;
  notification: ImageSourcePropType;
  payment: ImageSourcePropType;
  profile: ImageSourcePropType;
  register: ImageSourcePropType;
  search: ImageSourcePropType;
  settings: ImageSourcePropType;
  users: ImageSourcePropType;
  warning: ImageSourcePropType;
}

export interface ThemeAssets {
  OpenSansLight?: any;
  OpenSansRegular?: any;
  OpenSansSemiBold?: any;
  OpenSansExtraBold?: any;
  OpenSansBold?: any;

  logo: ImageSourcePropType;
  header: ImageSourcePropType;
  background: ImageSourcePropType;

  card1: ImageSourcePropType;
  card2: ImageSourcePropType;
  card3: ImageSourcePropType;
  card4: ImageSourcePropType;
  card5: ImageSourcePropType;

  photo1: ImageSourcePropType;
  photo2: ImageSourcePropType;
  photo3: ImageSourcePropType;
  photo4: ImageSourcePropType;
  photo5: ImageSourcePropType;
  photo6: ImageSourcePropType;

  avatar1: ImageSourcePropType;
  avatar2: ImageSourcePropType;

  ios: ImageSourcePropType;
  android: ImageSourcePropType;
}

export interface ThemeFonts {
  text: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  p: string;
  thin: string;
  extralight: string;
  light: string;
  normal: string;
  medium: string;
  bold: string;
  semibold: string;
  extrabold: string;
  black: string;
}
