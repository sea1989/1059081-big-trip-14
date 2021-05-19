import TripInfoView from './view/trip-info.js';
import SiteMenuView from './view/site-menu.js';
import FilterView from './view/filter.js';
import Trip from './presenter/trip';

import { generateTask } from './mock/task.js';
import { render, RenderPosition} from './utils/render.js';

const TASK_COUNT = 5;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);

const siteMainElement = document.querySelector('.trip-main');
const siteNavigationElement = document.querySelector('.trip-controls__navigation');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');


render(siteMainElement, new TripInfoView, RenderPosition.AFTERBEGIN);
render(siteNavigationElement, new SiteMenuView, RenderPosition.BEFOREEND);
render(siteFiltersElement, new FilterView, RenderPosition.BEFOREEND);


const tripPresenter = new Trip(siteEventsElement);
tripPresenter.init(tasks);
