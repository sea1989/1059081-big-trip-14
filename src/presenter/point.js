import TaskEditView from '../view/edit-point.js';
import TaskView from '../view/task.js';
import { render, RenderPosition, replace } from '../utils/render.js';

export default class Task {
  constructor(taskListContainer) {
    this._taskListContainer = taskListContainer;

  }

  init(task) {
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


    taskComponent.setFavoriteClickHandler((task) => {
      task.isFavorite = !task.isFavorite;
    });

    render(this._taskListContainer, taskComponent, RenderPosition.BEFOREEND);
  }

}
