import TripInfoView from './view/trip-info.js';
import SiteMenuView from './view/site-menu.js';
import FilterView from './view/filter.js';
import SortView from './view/sort.js';
import TaskEditView from './view/edit-point.js';
import TasksListView from './view/tasks-list.js';
import TaskView from './view/task.js';
import { generateTask } from './mock/task.js';
import { render, RenderPosition, replace } from './utils/render.js';

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
    replace(taskEditComponent, taskComponent);
  };

  const replaceFormToCard = () => {
    replace(taskComponent, taskEditComponent);
  };

  taskComponent.setTaskBtnClickHandler(() => {
    replaceCardToForm();
  });

  taskEditComponent.setEditClickHandler(() => {
    replaceFormToCard();
  });

  render(taskListElement, taskComponent, RenderPosition.BEFOREEND);
};

const taskListComponent = new TasksListView();

render(siteMainElement, new TripInfoView, RenderPosition.AFTERBEGIN);
render(siteNavigationElement, new SiteMenuView, RenderPosition.BEFOREEND);
render(siteFiltersElement, new FilterView, RenderPosition.BEFOREEND);
render(siteEventsElement, new SortView, RenderPosition.BEFOREEND);
render(siteEventsElement, taskListComponent, RenderPosition.BEFOREEND);

for (let i = 0; i < 5; i++) {
  renderTask(taskListComponent, tasks[i]);
}
