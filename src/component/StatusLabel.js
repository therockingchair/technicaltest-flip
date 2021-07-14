import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import StatusType from '../constant/StatusType';
import Color from '../constant/Color';

const styles = StyleSheet.create({
  successText: {
    textAlign: 'center',
    padding: 4,
    color: 'white',
    backgroundColor: Color.SUCCESS,
    borderRadius: 4,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  pendingText: {
    textAlign: 'center',
    padding: 4,
    borderRadius: 4,
    borderColor: Color.PENDING,
    borderWidth: 2,
    overflow: 'hidden',
    alignSelf: 'center',
  },
});

export default StatusLabel = ({style, status}) => {
  switch (status) {
    case StatusType.SUCCESS:
      return (
        <Text.MBold style={{...styles.successText, ...style}}>
          Berhasil
        </Text.MBold>
      );
    case StatusType.PENDING:
      return (
        <Text.MBold style={{...styles.pendingText, ...style}}>
          Pengecekan
        </Text.MBold>
      );
    default:
      return <View />;
  }
};
