export function filterData(data, key, value) {
  return data.filter(item =>
   item[key].toLowerCase() === value.toLowerCase()
   )
}