import axios from 'axios';

class BaseApi {
  request(params) {
    if (!params.method) {
      params.method = 'get';
    }
    // Wrapping in a promise
    return new Promise((resolve, reject) => {
      // Call axios and pass parameters as an object 'params'{method,url,data}
      axios(params)
        .then(res => resolve(res.data)) //
        // Handle the error
        .catch(err => {
          console.error(err);
          let errMessage = null;
          if (err.response) {
            if (err.response.data.detail) {
              errMessage = err.response.data.detail;
            }
          }
          if (!errMessage) {
            errMessage = err.toString();
          }
          reject(err);
        });
    });
  }
}

export default BaseApi;
