export const searchResults = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SEARCHED_DATA':
      const searchedData = action.dataArray;
      return [...searchedData];
    default:
      return state;
  }
};
