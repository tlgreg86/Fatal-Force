export const filterByYear = (dataArray, year) => {
	return dataArray.filter( victim => {
		return victim.year === year
	})
}

// export const totals = (dataArray) => {
// 	return dataArray.reduce( (obj, victim) => {
// 		obj[victim.year] = !obj[victim.year] ? {} : obj[victim.year]
// 		return obj[victim.year][victim.race] = (obj[victim.year][victim.race] || 0) + 1
// 	}, {})
// }


export const totals = (dataArray) => {
  let newObj = dataArray.reduce( (obj, victim) => {
	if (!obj[victim.year]) {
		obj[victim.year] = {}
	} else if (!obj[victim.year][victim.race]) {
		obj[victim.year][victim.race] = 1
	} else {
		obj[victim.year][victim.race] ++
	}

    return obj

  }, {})

	return newObj
}
