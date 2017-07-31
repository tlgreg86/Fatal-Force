import { ApiCall, ApiSearch } from '../components/helpers/apiHelper';

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

export const searchData = (name) => {
  return ( dispatch => {
    return ApiSearch.getAllData(name)
      .then(data => {
        dispatch(addSearchedData(data))
      })
      .catch(error => { throw(error)})
  })
}

export const addSearchedData = (dataArray) => {
  return {
    type: 'ADD_SEARCHED_DATA',
    dataArray
  }
}
