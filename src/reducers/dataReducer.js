export const data = (state=[], action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const newData = action.dataArray
      return [...state, ...newData]
    default:
      return state

  }
}
