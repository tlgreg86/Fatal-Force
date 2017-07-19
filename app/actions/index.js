import ApiCall from '../components/apiHelper';

export const loadData = () => {
  return ( dispatch => {
    return ApiCall.getAllData()
      .then(data => {
        dispatch(addData(data))
      })
  })
}

export const addData = (dataArray) => {
  return {
    type: 'ADD_DATA',
    dataArray
  }
}
