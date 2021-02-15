import {createProfileRatingTemplate} from "./view/profileRatingView.js";
import {createMenuTemplate} from "./view/menuView.js";
import {createSortTemplate} from "./view/sortView.js";
import {createMainContentTemplate} from "./view/mainContentView.js";
import {createFilmsListTemplate} from "./view/filmsListView.js";
import {createFilmsListExtraTemplate} from "./view/filmsListExtraView.js";
import {createFilmsContainerTemplate} from "./view/filmsContainerView.js";
import {createFilmCardTemplate} from "./view/filmCardView.js";
import {createPopupTemplate} from "./view/popupView.js";
import {createShowMoreButtonTemplate} from "./view/showMoreButtonView.js";
import {createFooterStatsTemplate} from "./view/footerStatsView.js";
import {generateFilm} from "./mock/film.js";

const films = new Array(20).fill().map(generateFilm);
console.log(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);

render(footerStatisticsElement, createFooterStatsTemplate(), `beforeend`);

render(headerElement, createProfileRatingTemplate(), `beforeend`);
render(mainElement, createMenuTemplate(), `beforeend`);
render(mainElement, createSortTemplate(), `beforeend`);
render(mainElement, createMainContentTemplate(), `beforeend`);


const mainContentElement = mainElement.querySelector(`.films`);

render(mainContentElement, createFilmsListTemplate(), `beforeend`);
const filmsListElement = mainContentElement.querySelector(`.films-list`);
render(filmsListElement, createFilmsContainerTemplate(), `beforeend`);
const filmsContainer = filmsListElement.querySelector(`.films-list__container`);
for (let i = 0; i < 10; i++) {
  render(filmsContainer, createFilmCardTemplate(), `beforeend`);
}
render(filmsListElement, createShowMoreButtonTemplate(), `beforeend`);

render(mainContentElement, createFilmsListExtraTemplate(), `beforeend`);
const filmsListTopRatedElement = mainContentElement.querySelectorAll(`.films-list--extra`)[0];
render(filmsListTopRatedElement, createFilmsContainerTemplate(), `beforeend`);
const filmsListTopRatedContainer = filmsListTopRatedElement.querySelector(`.films-list__container`);
for (let i = 0; i < 2; i++) {
  render(filmsListTopRatedContainer, createFilmCardTemplate(), `beforeend`);
}

render(mainContentElement, createFilmsListExtraTemplate(), `beforeend`);
const filmsListMostCommentedElement = mainContentElement.querySelectorAll(`.films-list--extra`)[1];
render(filmsListMostCommentedElement, createFilmsContainerTemplate(), `beforeend`);
const filmsListMostCommentedContainer = filmsListMostCommentedElement.querySelector(`.films-list__container`);
for (let i = 0; i < 2; i++) {
  render(filmsListMostCommentedContainer, createFilmCardTemplate(), `beforeend`);
}
