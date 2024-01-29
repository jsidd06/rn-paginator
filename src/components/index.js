import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const RnPaginator = props => {
  const {
    data,
    itemsPerPage,
    renderItem,
    renderPaginationControl,
    paginationStyle,
    currentPageTextStyle,
    upcomingPageTextStyle,
    paginationRootStyle,
  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const showData = data.slice(startIndex, endIndex);

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
    <View style={[paginationRootStyle]}>
      {showData.map(renderItem)}
      <View style={[styles.pagination, paginationStyle]}>
        {renderPaginationControl('Prev', handlePrev)}
        <Text style={[currentPageTextStyle, styles.txt]}>{currentPage}</Text>
        {upcomingPage && (
          <Text style={[upcomingPageTextStyle, styles.upTxtStyle]}>
            {upcomingPage}
          </Text>
        )}
        {renderPaginationControl('Next', handleNext)}
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
  txt: {
    color: '#000',
  },
  upTxtStyle: {
    color: '#637A9F',
  },
});
