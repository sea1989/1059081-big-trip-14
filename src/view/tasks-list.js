import { createElement } from './utils.js';

const createTemplate = () => {

  return `<ul class="trip-events__list">
  </ul>`.trim();

};


export default class TasksListView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
