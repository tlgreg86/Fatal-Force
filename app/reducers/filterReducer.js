export const filterResults = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_DATA':
      const filteredData = action.dataArray;
      return [...filteredData];
    default:
      return state;
  }
};
