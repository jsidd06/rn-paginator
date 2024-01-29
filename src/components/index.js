import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const RnPaginator = props => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = props.itemsPerPage;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const showData = props.data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(props.data.length / itemsPerPage);

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
