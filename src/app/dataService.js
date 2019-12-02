import axios from 'axios';

const post = (url,data) => {
  console.log("in post data => ",data);
  return axios.post(url,data).then(response => {
    console.log(response.data);
    return response.data
  });
};


export default {post};
