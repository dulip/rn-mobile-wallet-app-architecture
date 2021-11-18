import {FlexStyle, ScaledSize} from 'react-native';

// Spacing types
export interface ISpacing
  extends Pick<
    FlexStyle,
    | 'margin'
    | 'marginVertical'
    | 'marginHorizontal'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'marginBottom'
    | 'padding'
    | 'paddingVertical'
    | 'paddingHorizontal'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingBottom'
  > {}

export type TWeight =
  /** fontWeight: 400 */
  | 'normal'
  /** fontWeight: 100 */
  | 'thin'
  /** fontWeight: 200 */
  | 'extralight'
  /** fontWeight: 300 */
  | 'light'
  /** fontWeight: 500 */
  | 'medium'
  /** fontWeight: 600 */
  | 'semibold'
  /** fontWeight: 700 */
  | 'bold'
  /** fontWeight: 800 */
  | 'extrabold'
  /** fontWeight: 900 */
  | 'black';

export interface ThemeSizes {
  base: number;
  text: number;
  radius: number;
  padding: number;

  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  p: number;

  buttonBorder: number;
  buttonRadius: number;
  socialSize: number;
  socialRadius: number;
  socialIconSize: number;

  inputHeight: number;
  inputBorder: number;
  inputRadius: number;
  inputPadding: number;

  shadowOffsetWidth: number;
  shadowOffsetHeight: number;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;

  cardRadius: number;
  cardPadding: number;

  imageRadius: number;
  avatarSize: number;
  avatarRadius: number;

  switchWidth: number;
  switchHeight: number;
  switchThumb: number;

  checkboxWidth: number;
  checkboxHeight: number;
  checkboxRadius: number;
  checkboxIconWidth: number;
  checkboxIconHeight: number;

  linkSize: number;
  multiplier: number;
}

export interface ThemeSpacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface ThemeSpacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface ISizes {
  windowSizes: {
    width: ScaledSize['width'];
    height: ScaledSize['height'];
  };
  sizes: ThemeSizes & ThemeSpacing;
}
