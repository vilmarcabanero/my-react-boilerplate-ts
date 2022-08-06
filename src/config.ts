export const API = {
  SERVER: {
    WEBSERVICES: {
      TYPE: 'HTTP',
      OPTIONS: {
        baseURL: 'https://social-media-assessment-api.herokuapp.com/api',
        // baseURL: 'http://localhost:4000/api',
        // baseURL: 'https://jsonplaceholder.typicode.com/todos',
        // baseURL: 'https://nestjs-my-starter.herokuapp.com/api',
        headers: {
          // 'Cache-Control': 'no-cache',
        },
        timeout: 50000,
      },
    },
  },
};
