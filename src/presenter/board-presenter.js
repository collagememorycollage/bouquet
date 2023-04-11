import SectionHeroView from "../viev/section-hero-view.js";
import { render } from "../framework/render.js";
export default class BoardPresenter {
  #header = null;
  #main = null;
  #footer = null;
  #body = null;
  constructor({ header, main, footer, body }) {
    this.#header = header;
    this.#main = main;
    this.#footer = footer;
    this.#body = body;
  }

  init() {
    this.#renderBoard();
  }
  #renderBoard() {
    render(new SectionHeroView(), this.#main);
  }
}
