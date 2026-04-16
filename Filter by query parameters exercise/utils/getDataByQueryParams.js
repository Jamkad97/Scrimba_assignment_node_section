export const getDataByQueryParams = (data, queryObj) => {
  let result = data

  if (queryObj.country) {
    result = result.filter(item =>
      item.country.toLowerCase() === queryObj.country.toLowerCase()
      )
  }

  if (queryObj.continent) {
    result = result.filter(item =>
      item.continent.toLowerCase() === queryObj.continent.toLowerCase()
      )
  }

  if(queryObj.is_open_to_public) {
    const booValue = queryObj.is_open_to_public.toLowerCase() === 'true'
    result = result.filter(item => item.is_open_to_public === booValue)
  }
  return result
}