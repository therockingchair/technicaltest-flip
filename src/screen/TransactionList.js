import React, {useEffect, useReducer} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BaseContainer, Text, TransactionItem, SearchForm} from '../component';
import {useApi, useDidUpdate} from '../util';
import SortContext from '../context/SortContext';
import {Color} from '../constant';

const styles = StyleSheet.create({
  container: {margin: 8},
  listContentContainer: {paddingBottom: 100},
  searchContainer: {marginBottom: 8},
  loading: {flex: 1},
  errorButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 32,
    borderRadius: 10,
    backgroundColor: '#ff6348',
    padding: 12,
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
  },
});

export const transactionListReducer = (state, action) => {
  const onSortData = (newData, type) => {
    switch (type) {
      case 'ascending name':
        newData.sort((a, b) => a.beneficiary_name > b.beneficiary_name);
        break;
      case 'descending name':
        newData.sort((a, b) => a.beneficiary_name < b.beneficiary_name);
        break;
      case 'newest':
        newData.sort((a, b) => a.created_at < b.created_at);
        break;
      case 'oldest':
        newData.sort((a, b) => a.created_at > b.created_at);
        break;
    }
  };

  const onFilterData = (data, type, query) => {
    let newData = [];

    const searchKey = [
      'beneficiary_name',
      'sender_bank',
      'beneficiary_bank',
      'amount',
    ];

    for (const transaction of data) {
      const queryLower = query.toLowerCase();
      const existData = searchKey.some(key =>
        String(transaction[key])
          .toLowerCase()
          .includes(queryLower),
      );
      if (existData) {
        newData.push(transaction);
      }
    }
    onSortData(newData, type);

    return {data: newData, type, query};
  };

  switch (action.type) {
    case 'ascending name':
    case 'descending name':
    case 'newest':
    case 'oldest': {
      return onFilterData(state.data, action.type, state.query);
    }
    case 'search': {
      return onFilterData(action.data, state.type, action.query);
    }
    case 'insert': {
      return {...state, data: action.data};
    }
    default:
      return state;
  }
};

const useGetTransaction = () => {
  const loadData = () => fetch('https://nextar.flip.id/frontend-test');
  const api = useApi(loadData);

  useEffect(() => {
    api.onStart();
  }, []);

  return api;
};

export default TransactionList = () => {
  const {status, data, onStart} = useGetTransaction();
  const [stateReducer, dispatch] = useReducer(transactionListReducer, {
    data: [],
    type: '',
    query: '',
  });

  useDidUpdate(() => {
    if (data) dispatch({type: 'insert', data: Object.values(data)});
  }, [data]);

  const onSearch = value =>
    dispatch({
      type: 'search',
      data: Object.values(data),
      query: value,
    });

  const renderItem = ({item}) => <TransactionItem item={item} />;

  return (
    <BaseContainer style={styles.container}>
      {status === 'loading' && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={Color.DEFAULT}
        />
      )}
      {status === 'success' && (
        <View>
          <SortContext.Provider value={{type: stateReducer.type, dispatch}}>
            <SearchForm
              containerStyle={styles.searchContainer}
              placeholder="Cari nama, bank, atau nominal"
              onChangeText={onSearch}
            />
          </SortContext.Provider>
          <FlatList
            contentContainerStyle={styles.listContentContainer}
            data={stateReducer.data}
            renderItem={renderItem}
          />
        </View>
      )}
      {status === 'error' && (
        <TouchableOpacity style={styles.errorButtonContainer} onPress={onStart}>
          <Text.M style={styles.errorText}>Silahkan coba lagi</Text.M>
        </TouchableOpacity>
      )}
    </BaseContainer>
  );
};
