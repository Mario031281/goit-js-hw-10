// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_DJGX0ojuoZrWFcVp6TL4e763FgvYuLPRuHPBh518X2G3s8nDiQKqudToDqfe60Yw';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_DJGX0ojuoZrWFcVp6TL4e763FgvYuLPRuHPBh518X2G3s8nDiQKqudToDqfe60Yw';

export const notifyFailure = errorMessage => {
  Notify.failure(errorMessage, {
    timeout: 6000,
    width: '550px',
    borderRadius: '50px',
    clickToClose: true,
    position: 'center-top',
    fontSize: '18px',
  });
};

export const fetchBreeds = function () {
  return fetch(`${BASE_URL}breeds?api-key=${API_KEY}`).then(response => {
    if (!response.ok) {
      notifyFailure('Oops! Something went wrong! Try reloading the page!');
    }
    return response.json();
  });
};

export const fetchCatByBreed = function (breedId) {
  return fetch(
    `${BASE_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        notifyFailure('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    })
    .catch(err => console.log(err));
};
