import { ApiCall } from '../components/helpers/apiHelper';

export const addData = (dataArray) => {
  return {
    type: 'ADD_DATA',
    dataArray,
  };
};

export const loadData = () => {
  return ((dispatch) => {
    return ApiCall.getAllData()
      .then((data) => {
        dispatch(addData(data));
      })
      .catch((error) => {
        throw (error);
      });
  });
};

export const filterData = (dataArray) => {
  return {
    type: 'FILTER_DATA',
    dataArray,
  };
};
