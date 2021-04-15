import {createTripInfoTemplate} from './view/trip-info.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilterTemplate} from './view/filter.js';
import {createSortTemplate} from './view/sort.js';
import {createEventsListTemplate} from './view/events-list.js';

const render = (container, template, place='beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.trip-main');
const siteNavigationElement = document.querySelector('.trip-controls__navigation');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(siteMainElement, createTripInfoTemplate(), 'afterbegin');
render(siteNavigationElement, createSiteMenuTemplate());
render(siteFiltersElement, createFilterTemplate());
render(siteEventsElement, createSortTemplate());
render(siteEventsElement, createEventsListTemplate());
