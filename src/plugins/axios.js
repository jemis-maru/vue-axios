// plugins/axios.js

import axios from 'axios';

export default {
  install: (app) => {
    // Set up default base URL
    const apiInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/'
    });

    // Inject axios to the app instance
    app.config.globalProperties.$axios = apiInstance;

    // provide axios globally
    app.provide("axios", apiInstance);
  },
};
