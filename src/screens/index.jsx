import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RnPaginator from '../components';

const Home = () => {
  return (
    <View style={styles.cnt}>
      <RnPaginator />
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
