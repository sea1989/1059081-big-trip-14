import TasksListView from '../view/tasks-list.js';
import SortView from '../view/sort.js';
import PointPresenter from './point.js';
import { render, RenderPosition } from '../utils/render.js';

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;

    this._sortComponent = new SortView();
    this._tasksComponent = new TasksListView();

    // this._noTaskComponent = new NoTaskView();
  }

  init(tripPoints) {
    this._points = tripPoints.slice();

    render(this._tripContainer, this._sortComponent, RenderPosition.BEFOREEND);
    render(this._tripContainer, this._tasksComponent, RenderPosition.BEFOREEND);

    this._renderTasks(this._points);

  }

  _renderSort() {
    // Метод для рендеринга сортировки
  }

  _renderTask(taskListElement, task) {
    const pointPresenter = new PointPresenter(taskListElement);
    pointPresenter.init(task);

  }

  _renderTasks(tasks) {
    // Метод для рендеринга N-задач за раз

    for (let i = 0; i < 5; i++) {
      this._renderTask(this._tasksComponent, tasks[i]);
    }

  }

  _renderNoTasks() {
    // Метод для рендеринга заглушки
  }


  _renderBoard() {
    // Метод для инициализации (начала работы) модуля,
    // бОльшая часть текущей функции renderBoard в main.js
  }
}
