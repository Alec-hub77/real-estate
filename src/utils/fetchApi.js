import axios from "axios";
import queryString from 'query-string'

export const fetchApi = axios.create({
    baseURL: 'https://bayut.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '224dd91d2dmsha4835ac57d331a4p101de8jsna91c720f307b'
    },
    paramsSerializer: (params) => queryString.stringify({...params})
})

fetchApi.interceptors.request.use(async (config) => config);

fetchApi.interceptors.response.use((response) => {
  if (response && response.data) {
      return response.data;
  }

  return response;
}, (error) => {
  throw error;
});

