import axios from 'axios';

const BASE_URL = 'http://localhost:3007';

export {getBookData, getLessonData};

function getBookData() {
  const url = `${BASE_URL}/api/books`;
  return axios.get(url).then(response => response.data);
}

function getLessonData() {
    // will pass in a prop or something to make the :book dynamic
  const url = `${BASE_URL}/api/:book/lessons`;
  return axios.get(url).then(response => response.data);
}