import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Switch: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
