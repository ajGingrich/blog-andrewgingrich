function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data); // eslint-disable-line no-console
    console.log(error.response.status); // eslint-disable-line no-console
    console.log(error.response.headers); // eslint-disable-line no-console
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request); // eslint-disable-line no-console
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message); // eslint-disable-line no-console
  }
  console.log(error.config); // eslint-disable-line no-console
  // this.setState({
  //   hasSubscription: true
  // })
  return Promise.reject(error);
}


export {
  handleAxiosError,
}
