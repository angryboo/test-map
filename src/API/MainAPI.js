import axios from 'axios';

const api = axios.create({
  baseURL: 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/',
});

// eslint-disable-next-line import/prefer-default-export
export const mask = {
  getMask: () => api.get('json?lat=37.544579&lng=127.056045&m=5000'),
};
