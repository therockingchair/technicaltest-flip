import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
});

export default BaseContainer = props => (
  <SafeAreaView {...props} style={{...styles.container, ...props.style}} />
);
