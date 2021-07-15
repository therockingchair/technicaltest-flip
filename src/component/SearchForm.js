import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {SortModal} from '.';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    marginRight: 12,
  },
});

export default SearchForm = ({containerStyle, placeholder, onChangeText}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <SortModal />
    </View>
  );
};
