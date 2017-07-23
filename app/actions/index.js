import ApiCall from '../components/helpers/apiHelper';

export const loadData = () => {
  return ( dispatch => {
    return ApiCall.getAllData()
      .then(data => {
        dispatch(addData(data))
      })
      .catch(error => { throw(error)})
  })
}

export const addData = (dataArray) => {
  return {
    type: 'ADD_DATA',
    dataArray
  }
}
