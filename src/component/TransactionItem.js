import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import StatusLabel from './StatusLabel';
import StatusLine from './StatusLine';
import CommonUtil from '../util/CommonUtil';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 4,
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
  },
  lineContainer: {position: 'absolute', left: 0, top: 0, bottom: 0},
  name: {textTransform: 'uppercase'},
});

export default TransactionItem = ({item}) => {
  const navigation = useNavigation();

  const amount = CommonUtil.amount(item.amount);
  const date = CommonUtil.date(item.created_at);

  const goToDetail = () =>
    navigation.navigate('TransactionDetail', {data: item});

  return (
    <TouchableOpacity onPress={goToDetail} style={styles.container}>
      <StatusLine status={item.status} style={styles.lineContainer} />
      <View>
        <Text.LBold>{`${item.sender_bank} \u279c ${item.beneficiary_bank}`}</Text.LBold>
        <Text.M style={styles.name}>{item.beneficiary_name}</Text.M>
        <Text.M>{`${amount} \u2022 ${date}`}</Text.M>
      </View>
      <StatusLabel status={item.status} />
    </TouchableOpacity>
  );
};
