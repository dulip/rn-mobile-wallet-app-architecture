import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Boxes: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 1</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 1</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 1</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 1</Text>
        </View>
      </View>
    </View>
  );
};

export default Boxes;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
