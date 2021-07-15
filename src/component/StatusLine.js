import React from 'react';
import {View, StyleSheet} from 'react-native';
import StatusType from '../constant/StatusType';
import Color from '../constant/Color';

const styles = StyleSheet.create({
  container: {
    width: 4,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
});

export default StatusLine = ({style, status}) => {
  switch (status) {
    case StatusType.SUCCESS:
      return (
        <View
          style={{
            ...styles.container,
            backgroundColor: Color.SUCCESS,
            ...style,
          }}
        />
      );
    case StatusType.PENDING:
      return (
        <View
          style={{
            ...styles.container,
            backgroundColor: Color.PENDING,
            ...style,
          }}
        />
      );
    default:
      return <View />;
  }
};
