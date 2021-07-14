import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '../constant';

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    padding: 2,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: Color.SECONDARY,
  },
  child: {flex: 1, borderRadius: 10, backgroundColor: Color.SECONDARY},
});

export default RadioButton = ({style, active = false}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {active && <View style={styles.child} />}
    </View>
  );
};
