export default class ApiCall {
  static getAllData() {
    return fetch('https://thecountedapi.com/api/counted')
    .then(response => response.json())
    .then(dataObj => dataObj)
  }
}

log
