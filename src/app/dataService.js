import axios from "axios";

const post = (url, data) => {
  return axios.post(url, data).then(response => response.data);
};

const get = (url, data) => {
  return axios.get(url, data).then(response => response.data);
};

export { post, get };
