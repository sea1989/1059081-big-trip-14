import {createTripInfoTemplate} from './view/trip-info.js';
import {createSiteMenuTemplate} from './view/site-menu.js';
import {createFilterTemplate} from './view/filter.js';
import {createSortTemplate} from './view/sort.js';
import {createEventsListTemplate, createEditformTemplate} from './view/events-list.js';
import {generateTask} from './mock/task.js';


const TASK_COUNT = 5;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);

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
render(siteEventsElement, createEditformTemplate(tasks[0]));

render(siteEventsElement, createEventsListTemplate(tasks));

