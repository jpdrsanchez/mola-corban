export const getCurrentOffset = (url = null) => {
  if (!!url) {
    console.log(url.split('=').split(/[?&]offset=|[?&]limit=/))
  }

  return null
}
