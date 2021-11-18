import {ITheme, ThemeColors} from '../../types/Theme';

import {THEME as commonTheme} from '../../constants/CommonThemeConstants';

export const COLORS: ThemeColors = {
  // default text color
  text: '#252F40',

  // base colors
  /** UI color for #primary */
  primary: '#55B696',
  /** UI color for #secondary */
  secondary: '#627594', // '#8392AB',
  /** UI color for #tertiary */
  tertiary: '#E8AE4C',

  // non-colors
  black: '#252F40',
  white: '#FFFFFF',

  dark: '#252F40',
  light: '#E9ECEF',

  // gray variations
  /** UI color for #gray */
  gray: '#A7A8AE',

  // colors variations
  /** UI color for #danger */
  danger: '#EA0606',
  /** UI color for #warning */
  warning: '#FFC107',
  /** UI color for #success */
  success: '#82D616',
  /** UI color for #info */
  info: '#17C1E8',

  /** UI colors for navigation & card */
  card: '#FFFFFF',
  background: '#E9ECEF',

  /** UI color for shadowColor */
  shadow: '#000000',
  overlay: 'rgba(0,0,0,0.3)',

  /** UI color for input borderColor on focus */
  focus: '#E293D3',
  input: '#252F40',

  /** UI color for switch checked/active color */
  switchOn: '#3A416F',
  switchOff: '#E9ECEF',

  /** UI color for checkbox icon checked/active color */
  checkbox: ['#3A416F', '#141727'],
  checkboxIcon: '#FFFFFF',

  /** icon tint color */
  icon: '#8392AB',

  /** blur tint color */
  blurTint: 'light',

  /** product link color */
  link: '#CB0C9F',
};

export const mdaq: ITheme = {
  ...commonTheme,
  colors: COLORS,
};
