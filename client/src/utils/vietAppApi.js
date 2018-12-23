import axios from 'axios';

var PORT = process.env.PORT || 3007;
var chooseBase = function () {
  if (process.env.NODE && ~process.env.NODE.indexOf("heroku"))
   return ''
  else {
    return 'http://localhost:' + PORT
  }
  // if (process.env.PORT) {
  //   return ''
  // }
  // else {
  //   return 'http://localhost:' + PORT
  // }
}
console.log(process.env.PORT)
const BASE_URL = 'http://localhost:' + PORT//''

// if (process.env.PORT) {
//   BASE_URL = ''
// }
// else {
//   BASE_URL = 'http://localhost:' + PORT;
// }

// WAS: 'http://localhost:' + PORT;

export {getBookData, getLessonData, getExerciseData};

// removed ${BASE_URL}

function getBookData() {
  const url = `${BASE_URL}/api/getContent/books`;
  return axios.get(url).then(response => response.data);
}

function getLessonData(book_num) {
    // will pass in a prop or something to make the :book dynamic
  const url = `${BASE_URL}/api/getContent/lessons/`;
  //${book_num}`;
  return axios.get(url).then(response => response.data);
}
 
function getExerciseData(lesson_num) {
  const url = `${BASE_URL}/api/getContent/exercises/${lesson_num}`
  return axios.get(url).then(response => response.data)
}