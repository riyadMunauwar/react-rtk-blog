import axios from 'axios';

class Http {

  constructor() {
    if (!Http.instance) {
        Http.instance = axios.create({
        baseURL: 'http://localhost:9000',
        timeout: 5000
      });
    }
    return Http.instance;
  }


  static get(url, config) {
    return Http.instance.get(url, config);
  }

  static post(url, data, config) {
    return Http.instance.post(url, data, config);
  }

  static put(url, data, config) {
    return Http.instance.put(url, data, config);
  }

  static patch(url, data, config) {
    return Http.instance.patch(url, data, config);
  }

  static delete(url, config) {
    return Http.instance.delete(url, config);
  }

}

const http = new Http();

export default http;