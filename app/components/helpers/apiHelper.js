export class ApiCall {
  static getAllData() {
    return fetch('https://thecountedapi.com/api/counted')
    .then(response => response.json())
    .then(dataObj => dataObj)
  }
}

export class ApiSearch {
  static getAllData(name) {
    return fetch(`https://thecountedapi.com/api/counted/?name=${name}`)
    .then(response => response.json())
    .then(dataObj => dataObj)
  }
}
