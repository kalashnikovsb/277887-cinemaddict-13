import {
  TITLES,
  ARTERNATIVE_TITLES,
  POSTERS,
  DESCRIPTIONS,
  DIRECTORS,
  WRITERS,
  ACTORS,
  COUNTRIES,
  GENRES,
  AUTHORS,
  EMOTIONS
} from "../const.js";
import dayjs from "dayjs";


const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


const getRandomArrayElement = (array) => {
  const lastIndex = array.length - 1;
  return array[getRandomInteger(0, lastIndex)];
};


// Возвращает рандомный не пустой подмассив
const getRandomSubArray = (array) => {
  const maxCount = array.length - 1;
  let count = getRandomInteger(1, maxCount);
  let result = [];
  while (count > 0) {
    result.push(getRandomArrayElement(array));
    count -= 1;
  }
  return result;
};


const generateRating = (min, max) => {
  let result = getRandomInteger(min, max);
  return result / 10;
};


const generateCommentItem = () => {
  return {
    id: generateId(),
    author: getRandomArrayElement(AUTHORS),
    comment: getRandomSubArray(DESCRIPTIONS).join(` `),
    date: generateDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  };
};


const generateCommentsList = (min, max) => {
  let commentsCount = getRandomInteger(min, max);
  const result = [];
  while (commentsCount > 0) {
    result.push(generateCommentItem());
    commentsCount -= 1;
  }
  return result;
};


const generateDate = () => {
  let now = dayjs();
  now = now
    .add(getRandomInteger(-365, 365), `day`)
    .add(getRandomInteger(-86400000, 86400000), `millisecond`);
  return now.format(`YYYY-MM-DDTHH:mm:ss.SSSZ`);
};


export const generateFilm = () => {
  // Выбор одного из 7 фильмов на выбор из констант
  const filmIndex = getRandomInteger(0, 6);

  return {
    id: generateId(),
    comments: generateCommentsList(0, 5),
    filmInfo: {
      title: TITLES[filmIndex],
      alternativeTitle: ARTERNATIVE_TITLES[filmIndex],
      totalRating: generateRating(0, 100),
      poster: POSTERS[filmIndex],
      ageRating: getRandomInteger(0, 18),
      director: getRandomArrayElement(DIRECTORS),
      writers: getRandomSubArray(WRITERS),
      actors: getRandomSubArray(ACTORS),
      release: {
        date: generateDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES)
      },
      runtime: getRandomInteger(40, 120),
      genre: Array.from(new Set(getRandomSubArray(GENRES))),
      description: getRandomSubArray(DESCRIPTIONS).join(` `)
    },
    userDetails: {
      watchlist: Boolean(getRandomInteger(0, 1)),
      alreadyWatched: Boolean(getRandomInteger(0, 1)),
      watchingDate: generateDate(),
      favorite: Boolean(getRandomInteger(0, 1))
    }
  };
};
