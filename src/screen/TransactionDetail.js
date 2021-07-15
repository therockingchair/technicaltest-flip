import React, {useState, useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity, Clipboard} from 'react-native';
import {BaseContainer, Text} from '../component';
import {CommonUtil} from '../util';
import {Color} from '../constant';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  idTransactionContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'space-between',
  },
  headerDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
  },
  detailContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  gridContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  contentContainer: {flex: 0.5},
  contentTitle: {
    textTransform: 'uppercase',
  },
  showDetailText: {
    color: Color.SECONDARY,
  },
  smallLine: {
    height: 1,
    backgroundColor: '#f1f2f6',
  },
  mediumLine: {
    height: 2,
    backgroundColor: '#dfe6e9',
  },
});

const Grid = props => <View {...props} style={styles.gridContainer} />;

const Content = ({title, value}) => (
  <View style={styles.contentContainer}>
    <Text.LBold style={styles.contentTitle}>{title}</Text.LBold>
    <Text.L>{value}</Text.L>
  </View>
);

const Detail = ({data}) => {
  const [visible, setVisible] = useState(true);
  const onToggle = () => setVisible(prevState => !prevState);

  return (
    <View>
      <View style={styles.headerDetailContainer}>
        <Text.MBold>DETAIL TRANSAKSI</Text.MBold>
        <TouchableOpacity onPress={onToggle}>
          <Text.M style={styles.showDetailText}>
            {visible ? `Tutup` : 'Buka'}
          </Text.M>
        </TouchableOpacity>
      </View>
      <View style={styles.mediumLine} />
      <View
        style={{
          ...styles.detailContainer,
          display: visible ? 'flex' : 'none',
        }}>
        {useMemo(
          () => (
            <View>
              <Text.LBold>{`${data.sender_bank} \u279c ${data.beneficiary_bank}`}</Text.LBold>
              <Grid>
                <Content
                  title={data.beneficiary_name}
                  value={data.account_number}
                />
                <Content
                  title="Nominal"
                  value={CommonUtil.amount(data.amount)}
                />
              </Grid>
              <Grid>
                <Content title="Berita Transfer" value={data.remark} />
                <Content title="Kode unik" value={data.account_number} />
              </Grid>
              <Grid>
                <Content
                  title="Waktu dibuat"
                  value={CommonUtil.date(data.created_at)}
                />
              </Grid>
            </View>
          ),
          [],
        )}
      </View>
    </View>
  );
};

export default TransactionDetail = ({route}) => {
  const data = route.params.data;

  const onCopyText = () => Clipboard.setString(data.id);

  return (
    <BaseContainer style={styles.container}>
      <View style={styles.idTransactionContainer}>
        <Text.MBold>{`ID TRANSAKSI:#${data.id}`}</Text.MBold>
        <TouchableOpacity onPress={onCopyText}>
          <Text.M>Salin</Text.M>
        </TouchableOpacity>
      </View>
      <View style={styles.smallLine} />
      <Detail data={data} />
    </BaseContainer>
  );
};
