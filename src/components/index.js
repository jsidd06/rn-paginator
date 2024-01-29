import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

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

const itemsPerPage = 6;

const RnPaginator = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const showData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const upcomingPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <View>
      <View>
        {showData.map(d => (
          <View style={{marginVertical: 20}} key={d.id}>
            <Text>{d.name}</Text>
          </View>
        ))}
      </View>
      <View style={[styles.pagination]}>
        <Pressable style={[styles.btn]} onPress={handlePrev}>
          <Text>Prev</Text>
        </Pressable>
        <View>
          <Text>{currentPage}</Text>
        </View>
        {upcomingPage && (
          <View>
            <Text>{upcomingPage}</Text>
          </View>
        )}
        <Pressable style={[styles.btn]} onPress={handleNext}>
          <Text>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RnPaginator;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
