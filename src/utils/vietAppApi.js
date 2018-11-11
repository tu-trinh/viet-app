import axios from 'axios';

const BASE_URL = 'http://localhost:3007' //;window.location.origin

export {getBookData, getLessonData, getExerciseData};

// If the test doesn't work, here is what you put at the beginning of each string:
// ${BASE_URL}

function getBookData() {
  const url = `${BASE_URL}/api/mainRouter/getContent/books`;
  return axios.get(url).then(response => response.data);
}

function getLessonData() {//book_num) {
    // will pass in a prop or something to make the :book dynamic
  const url = `${BASE_URL}/api/mainRouter/getContent/lessons/`;//${book_num}`;
  return axios.get(url).then(response => response.data);
}

function getExerciseData() { //lesson_id) {
  const url = `${BASE_URL}/api/mainRouter/getContent/exercises/`
  return axios.get(url).then(response => response.data)
}
