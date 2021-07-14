import React, {useState, useContext} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, RadioButton} from '.';
import {Color} from '../constant';
import SortContext from '../context/SortContext';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
  },
  sortText: {
    color: Color.SECONDARY,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  closeButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.SECONDARY,
    padding: 12,
    maxWidth: 120,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  closeText: {
    color: Color.SECONDARY,
    textTransform: 'uppercase',
  },
  openButton: {
    padding: 16,
    backgroundColor: Color.SECONDARY,
    borderRadius: 10,
  },
  sortTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortTypeText: {
    margin: 16,
  },
});

const SortType = ({onPress, type, active}) => {
  return (
    <TouchableOpacity style={styles.sortTypeContainer} onPress={onPress}>
      <RadioButton active={active} />
      <Text.L style={styles.sortTypeText}>{type}</Text.L>
    </TouchableOpacity>
  );
};

const PopUpModal = ({visible, onClose}) => {
  const {type, dispatch} = useContext(SortContext);

  const onAscendingName = () => dispatch({type: 'ascending name'});
  const onDescendingName = () => dispatch({type: 'descending name'});
  const onLatestDate = () => dispatch({type: 'latest'});
  const onOldestDate = () => dispatch({type: 'oldest'});

  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <SortType
            type="Nama A-Z"
            active={type === 'ascending name'}
            onPress={onAscendingName}
          />
          <SortType
            type="Nama Z-A"
            active={type === 'descending name'}
            onPress={onDescendingName}
          />
          <SortType
            type="Tanggal Terbaru"
            active={type === 'latest'}
            onPress={onLatestDate}
          />
          <SortType
            type="Tanggal Terlama"
            active={type === 'oldest'}
            onPress={onOldestDate}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text.L style={styles.closeText}>Tutup</Text.L>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SortModal = () => {
  const [visible, setVisible] = useState(false);

  const onToggle = () => setVisible(prevState => !prevState);

  return (
    <View>
      <TouchableOpacity onPress={onToggle}>
        <Text.M style={styles.sortText}>Urutkan</Text.M>
      </TouchableOpacity>
      <PopUpModal visible={visible} onClose={onToggle} />
    </View>
  );
};
