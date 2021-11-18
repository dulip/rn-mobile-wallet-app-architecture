import React from 'react';
import {ViewStyle, TouchableOpacityProps} from 'react-native';

import {ISpacing} from '../../core/types/Layouts';

/**
 * ## Button
 * Default usage:
 * ```
 * <Button>...</Button>
 * ```
 *
 */
export interface IButtonProps extends TouchableOpacityProps, ISpacing {
  /**
   * id for testID & accesibilityLabel
   */
  id?: string;
  /**
   * Renders borderRadius value to maxSize / 2 using
   * maxSize value is calculated from the maximum value from width, minWidth, maxWidth, height, minHeight, maxHeight
   * @see https://reactnative.dev/docs/view-style-props#borderradius
   */
  round?: boolean;
  /**
   * Renders borderRadius value using theme sizes.s; default sizes.buttonRadius
   * @see https://reactnative.dev/docs/view-style-props#borderradius
   */
  rounded?: boolean;
  /**
   * Renders a View flex style
   * @see https://reactnative.dev/docs/flexbox#proptypes
   * @see https://reactnative.dev/docs/layout-props
   */
  flex?: ViewStyle['flex'];
  /**
   * Renders a custom borderRadius value
   * @see https://reactnative.dev/docs/view-style-props#borderradius
   */
  radius?: ViewStyle['borderRadius'];
  /**
   * Renders a custom backgroundColor value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  color?: ViewStyle['backgroundColor'];
  /**
   * Renders LinearGradient component, colors
   * @see https://docs.expo.io/versions/latest/sdk/linear-gradient/#props
   */
  gradient?: string[];
  /**
   * Renders a backgroundColor directly from the colors.primary value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  primary?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.secondary value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  secondary?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.tertiary value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  tertiary?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.gray value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  gray?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.black value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  black?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.white value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  white?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.light value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  light?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.dark value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  dark?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.danger value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  danger?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.warning value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  warning?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.success value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  success?: boolean;
  /**
   * Renders a backgroundColor directly from the colors.info value
   * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
   */
  info?: boolean;
  /**
   * Renders a View flexDirection: row style
   * @see https://reactnative.dev/docs/flexbox#flex-direction
   */
  row?: boolean;
  /**
   * Renders a flex alignItems
   * Available values: 'auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
   * @see https://reactnative.dev/docs/layout-props#alignitems
   */
  align?: ViewStyle['alignItems'];
  /**
   * Renders a flex justifyContent
   * Available values: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
   * @see https://reactnative.dev/docs/layout-props#justifycontent
   */
  justify?: ViewStyle['justifyContent'];
  /**
   * Renders a custom height value
   * @see https://reactnative.dev/docs/layout-props#height
   */
  height?: ViewStyle['height'];
  /**
   * Renders a custom width value
   * @see https://reactnative.dev/docs/layout-props#width
   */
  width?: ViewStyle['width'];
  /**
   * Renders the container style with predefined borderWidth: 1, backgroundColor: 'transparent' & borderColor inherited
   */
  outlined?: boolean | string;
  /**
   * Generates a shadow style
   * @see https://reactnative.dev/docs/shadow-props
   */
  shadow?: boolean;
  /**
   * Renders social icons ('logo-facebook', 'logo-twitter', 'logo-dribbble') from Ionicons
   * @see https://docs.expo.io/guides/icons/
   * @see https://icons.expo.fyi
   */
  social?: 'facebook' | 'twitter' | 'dribbble';
  /**
   * Renders the View position
   * @see https://reactnative.dev/docs/layout-props#position
   */
  position?: ViewStyle['position'];
  /**
   * Renders the View right offset
   * @see https://reactnative.dev/docs/layout-props#right
   */
  right?: ViewStyle['right'];
  /**
   * Renders the View left offset
   * @see https://reactnative.dev/docs/layout-props#left
   */
  left?: ViewStyle['left'];
  /**
   * Renders the View top offset
   * @see https://reactnative.dev/docs/layout-props#top
   */
  top?: ViewStyle['top'];
  /**
   * Renders the View bottom offset
   * @see https://reactnative.dev/docs/layout-props#bottom
   */
  bottom?: ViewStyle['bottom'];
  /**
   * Provides haptic feedback on touch - Haptics.selectionAsync()
   * @see https://docs.expo.io/versions/latest/sdk/haptics/
   */
  haptic?: boolean;
  /**
   * Adds vibration feedback on touch using Vibration.vibrate pattern
   * @see https://reactnative.dev/docs/vibration
   */
  vibrate?: number | number[] | null;
  /**
   * Repeat vibration pattern
   * @see https://reactnative.dev/docs/vibration
   */
  vibrateRepeat?: boolean | null;
  /**
   * Renders Button content
   */
  children?: React.ReactNode;
}
