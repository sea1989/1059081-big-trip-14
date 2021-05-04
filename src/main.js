import TripInfoView from './view/trip-info.js';
import SiteMenuView from './view/site-menu.js';
import FilterView from './view/filter.js';
import SortView from './view/sort.js';
import TaskEditView from './view/edit-point.js';
import TasksListView from './view/tasks-list.js';
import TaskView from './view/task.js';
import { generateTask } from './mock/task.js';
import { render, RenderPosition } from './view/utils.js';

const TASK_COUNT = 5;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);


const siteMainElement = document.querySelector('.trip-main');
const siteNavigationElement = document.querySelector('.trip-controls__navigation');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

const renderTask = (taskListElement, task) => {
  const taskComponent = new TaskView(task);
  const taskEditComponent = new TaskEditView(task);

  const replaceCardToForm = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const replaceFormToCard = () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  taskComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    replaceCardToForm();
  });

  taskEditComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });


  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const taskListComponent = new TasksListView();

render(siteMainElement, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(siteNavigationElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(siteFiltersElement, new FilterView().getElement(), RenderPosition.BEFOREEND);
render(siteEventsElement, new SortView().getElement(), RenderPosition.BEFOREEND);
render(siteEventsElement, taskListComponent.getElement(), RenderPosition.BEFOREEND);

for (let i = 0; i < 5; i++) {
  renderTask(taskListComponent.getElement(), tasks[i]);
}
