import React from 'react';
import Bar from './Bar';
import { connect } from 'react-redux';

const SortingPlayer = ({ sortingItems }) => {
  return (
    <div className="flex flex-row h-4/6 w-10/12 items-end justify-center">
      {sortingItems.map((item, index) => {
        return <Bar key={index} sortingItem={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sortingItems: state.Sorting.sortingItems,
  };
};

export default connect(mapStateToProps)(SortingPlayer);
