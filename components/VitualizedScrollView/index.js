import React from 'react';
import { FlatList } from 'react-native';

const VirtualizedScrollView = props => {
  return (
    <FlatList
      {...props}
      data={[]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}  
      keyExtractor={(e, i) => 'dom' + i.toString()}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => (
        <>{props.children}</>
      )}
    />
  );
};

export default VirtualizedScrollView;