import React, {useCallback, useState} from 'react';
import {
  Image,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleSheet,
  Platform,
} from 'react-native';

import Block from './Block';
import Text from './Text';

import {IInputProps} from './types/IInputProps';
import useTheme from '../core/theme/ThemeProvider';
import {
  SIZES as sizes,
  SPACING as spacing,
} from '../core/constants/LayoutConstants';

const Input = ({
  id = 'Input',
  style,
  color,
  primary,
  secondary,
  tertiary,
  black,
  white,
  gray,
  danger,
  warning,
  success,
  info,
  search,
  disabled,
  label,
  icon,
  marginBottom,
  marginTop,
  marginHorizontal,
  marginVertical,
  marginRight,
  marginLeft,
  onFocus,
  onBlur,
  ...props
}: IInputProps) => {
  const {assets, colors} = useTheme();
  const [isFocused, setFocused] = useState(false);

  const handleFocus = useCallback(
    (event, focus) => {
      setFocused(focus);
      focus && onFocus?.(event);
      !focus && onBlur?.(event);
    },
    [setFocused, onFocus, onBlur],
  );

  const colorIndex = primary
    ? 'primary'
    : secondary
    ? 'secondary'
    : tertiary
    ? 'tertiary'
    : black
    ? 'black'
    : white
    ? 'white'
    : gray
    ? 'gray'
    : danger
    ? 'danger'
    : warning
    ? 'warning'
    : success
    ? 'success'
    : info
    ? 'info'
    : null;
  const inputColor = color
    ? color
    : colorIndex
    ? colors?.[colorIndex]
    : colors.gray;

  const inputBoxStyles = StyleSheet.flatten([
    style,
    {
      minHeight: sizes.inputHeight,
      ...(marginBottom && {marginBottom: marginBottom}),
      ...(marginTop && {marginTop: marginTop}),
      ...(marginHorizontal && {marginHorizontal: marginHorizontal}),
      ...(marginVertical && {marginVertical: marginVertical}),
      ...(marginRight && {marginRight: marginRight}),
      ...(marginLeft && {marginLeft: marginLeft}),
    },
  ]) as ViewStyle;

  const inputContainerStyles = StyleSheet.flatten([
    {
      minHeight: sizes.inputHeight,
      borderRadius: sizes.inputRadius,
      borderWidth: isFocused ? 2 : sizes.inputBorder,
      borderColor: isFocused ? colors.focus : inputColor,
    },
  ]) as ViewStyle;

  const inputStyles = StyleSheet.flatten([
    {
      flex: 1,
      zIndex: 2,
      height: '100%',
      fontSize: sizes.p,
      color: colors.input,
      paddingHorizontal: sizes.inputPadding,
    },
  ]) as TextStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const inputID =
    Platform.OS === 'android' ? {accessibilityLabel: id} : {testID: id};

  return (
    <Block flex={0} style={inputBoxStyles}>
      {label && (
        <Text bold marginBottom={spacing.s}>
          {label}
        </Text>
      )}
      <Block row align="center" justify="flex-end" style={inputContainerStyles}>
        {search && assets.search && (
          <Image
            source={assets.search}
            style={{marginLeft: sizes.inputPadding, tintColor: colors.icon}}
          />
        )}
        {icon && (
          <Image
            source={assets?.[icon]}
            style={{marginLeft: sizes.inputPadding, tintColor: colors.icon}}
          />
        )}
        <TextInput
          {...inputID}
          {...props}
          style={inputStyles}
          editable={!disabled}
          placeholderTextColor={inputColor}
          onFocus={event => handleFocus(event, true)}
          onBlur={event => handleFocus(event, false)}
        />
        {danger && assets.warning && (
          <Image
            source={assets.warning}
            style={{
              marginRight: spacing.s,
              tintColor: colors.danger,
            }}
          />
        )}
        {success && assets.check && (
          <Image
            source={assets.check}
            style={{
              width: 12,
              height: 9,
              marginRight: spacing.s,
              tintColor: colors.success,
            }}
          />
        )}
      </Block>
    </Block>
  );
};

export default React.memo(Input);
