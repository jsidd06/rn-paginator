import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import RnPaginator from '../components';

const data = [
  {id: Math.random().toLocaleString(), name: 'product 1'},
  {id: Math.random().toLocaleString(), name: 'product 2'},
  {id: Math.random().toLocaleString(), name: 'product 3'},
  {id: Math.random().toLocaleString(), name: 'product 4'},
  {id: Math.random().toLocaleString(), name: 'product 5'},
  {id: Math.random().toLocaleString(), name: 'product 6'},
  {id: Math.random().toLocaleString(), name: 'product 7'},
  {id: Math.random().toLocaleString(), name: 'product 8'},
  {id: Math.random().toLocaleString(), name: 'product 9'},
  {id: Math.random().toLocaleString(), name: 'product 10'},
  {id: Math.random().toLocaleString(), name: 'product 11'},
  {id: Math.random().toLocaleString(), name: 'product 12'},
  {id: Math.random().toLocaleString(), name: 'product 13'},
  {id: Math.random().toLocaleString(), name: 'product 14'},
  {id: Math.random().toLocaleString(), name: 'product 15'},
  {id: Math.random().toLocaleString(), name: 'product 16'},
  {id: Math.random().toLocaleString(), name: 'product 17'},
  {id: Math.random().toLocaleString(), name: 'product 18'},
  {id: Math.random().toLocaleString(), name: 'product 19'},
  {id: Math.random().toLocaleString(), name: 'product 20'},
];

const Home = () => {
  return (
    <View style={styles.cnt}>
      <RnPaginator data={data} itemsPerPage={7} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cnt: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 40 : 20,
    marginHorizontal: 15,
  },
});
