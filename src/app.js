import { readAPI } from './components/read_api';
import { postAPI } from './components/post_api';
// when the page loads

// READ
readAPI();

// CREATE
// after the user inputs the information
// when the user submits the form
const form = document.getElementById('new-car');
// call the api to create a new car
// update the cars
form.addEventListener('submit', postAPI);
