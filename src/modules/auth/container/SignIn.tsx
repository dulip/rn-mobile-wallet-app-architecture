import React, {FC} from 'react';
import {Platform} from 'react-native';

import useTheme from '../../../core/theme/ThemeProvider';
import {Button, Text, Block, Input, Image} from '../../../components';
import {useFetchUser} from '../service/AuthService';
import {LAYOUT as layout} from '../../../core/constants/LayoutConstants';
import {SPACING as spacing} from '../../../core/constants/LayoutConstants';

const isAndroid = Platform.OS === 'android';

const SignIn: FC = () => {
  const {colors, assets} = useTheme();
  const text = 'Sign In';
  const onLogin = useFetchUser();

  return (
    <Block safe marginTop={spacing.md}>
      <Block paddingHorizontal={spacing.s} paddingVertical={spacing.s}>
        <Block
          flex={0}
          center
          height={layout.windowSizes.height * 0.3}
          style={{zIndex: 0}}>
          <Text h4 center gray marginBottom={spacing.md}>
            {text}
          </Text>
          <Block row center flex={0} marginTop={spacing.md} style={{zIndex: 0}}>
            <Image
              source={assets.photo1}
              radius={0}
              height={layout.windowSizes.height * 0.09}
              width={200}
              resizeMode="cover"
              padding={spacing.m}
            />
          </Block>
        </Block>
        <Block
          justify="center"
          flex={0}
          marginTop={spacing.xxl}
          style={{zIndex: 0}}>
          <Input testID="userName" primary color={colors.black} />
          <Input
            marginTop={spacing.md}
            testID="password"
            secureTextEntry={true}
            color={colors.black}
            primary
          />
        </Block>
        <Block row center flex={0} marginTop={spacing.md} style={{zIndex: 0}}>
          <Button
            shadow={!isAndroid}
            width="100%"
            color={colors.primary}
            onPress={() => {
              console.log('M-DAQ');
              onLogin();
            }}>
            <Text bold primary color={colors.white} transform="uppercase">
              {text}
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default SignIn;
