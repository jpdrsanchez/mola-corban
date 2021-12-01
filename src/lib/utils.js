export const getNextPage = (paginationHeader = '') => {
  const hasNextPageParam = paginationHeader.includes('since=')
  if (hasNextPageParam) {
    let getNextPageParamIndex = paginationHeader.indexOf('since=')
    console.log(getNextPageParamIndex)
  }
}
