import { createTripInfoTemplate } from './view/trip-info.js';
import SiteMenuView from './view/site-menu.js';
import { createFilterTemplate } from './view/filter.js';
import { createSortTemplate } from './view/sort.js';
import { createEventsListTemplate, createEditformTemplate } from './view/events-list.js';
import { generateTask } from './mock/task.js';
import { renderTemplate, renderElement, RenderPosition } from './view/utils.js';


const TASK_COUNT = 5;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);


const siteMainElement = document.querySelector('.trip-main');
const siteNavigationElement = document.querySelector('.trip-controls__navigation');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

renderTemplate(siteMainElement, createTripInfoTemplate(), 'afterbegin');
renderElement(siteNavigationElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
renderTemplate(siteFiltersElement, createFilterTemplate(), 'beforeend');
renderTemplate(siteEventsElement, createSortTemplate(), 'beforeend');
renderTemplate(siteEventsElement, createEditformTemplate(tasks[0]), 'beforeend');
renderTemplate(siteEventsElement, createEventsListTemplate(tasks), 'beforeend');

