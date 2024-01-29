import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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

const renderItem = item => (
  <View style={{marginVertical: 20}} key={item.id}>
    <Text>{item.name}</Text>
  </View>
);

const renderPaginationControl = (text, onPress) => (
  <Pressable style={[styles.btn]} onPress={onPress}>
    <Text>{text}</Text>
  </Pressable>
);

const Home = () => {
  const [show, setShow] = useState([]);
  return (
    <View style={styles.cnt}>
      <View>{show.map(renderItem)}</View>
      <RnPaginator
        data={data}
        itemsPerPage={6}
        renderItem={renderItem}
        renderPaginationControl={renderPaginationControl}
        paginationStyle={{marginTop: 10}}
      />
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
  btn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
