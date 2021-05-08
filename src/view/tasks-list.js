import AbstractView from './abstract.js';

const createTemplate = () => {

  return `<ul class="trip-events__list">
  </ul>`.trim();

};

export default class TasksListView extends AbstractView{

  getTemplate() {
    return createTemplate();
  }

}
