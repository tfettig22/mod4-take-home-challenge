const formatSection = (string) => {
  let arr;
  let capital;
  let capital2;
  let capital3;
  let newStr
  if (string === 'nyregion') {
    arr = string.split('')
    capital = arr[0].toUpperCase()
    capital2 = arr[1].toUpperCase()
    capital3 = arr[2].toUpperCase()
    arr[0] = capital
    arr[1] = capital2
    arr[2] = ` ${capital3}`
    newStr = arr.join('')
    return newStr
  } else if (string === 'us') {
    newStr = string.toUpperCase()
    return newStr
  } else if (string === 'realestate') {
    arr = string.split('')
    capital = arr[0].toUpperCase()
    capital2 = arr[4].toUpperCase()
    arr[0] = capital
    arr[4] = ` ${capital2}`
    newStr = arr.join('')
    return newStr
  } else if (string === 'sundayreview') {
    arr = string.split('')
    capital = arr[0].toUpperCase()
    capital2 = arr[6].toUpperCase()
    arr[0] = capital
    arr[6] = ` ${capital2}`
    newStr = arr.join('')
    return newStr
  } else if (string === 't-magazine') {
    arr = string.split('')
    capital = arr[0].toUpperCase()
    capital2 = arr[2].toUpperCase()
    arr[0] = capital
    arr[2] = capital2
    newStr = arr.join('')
    return newStr
  } else if (!string) {
    return string
  } else {
    arr = string.split('')
    capital = arr[0].toUpperCase()
    arr[0] = capital
    newStr = arr.join('')
    return newStr
  }
}

export { formatSection }