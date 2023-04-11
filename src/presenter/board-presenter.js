import { render } from "../render.js";
import SectionHeroView from "../view/section-hero-view.js";
import SectionMissionView from "../view/section-mission-view.js";
import SectionAdvantagesView from "../view/section-advantages-view.js";
import SectionFilterReasonView from "../view/section-filter-reason-view.js";
import SectionFilterColorView from "../view/section-filter-color-view.js";
import SectionCatalogueView from "../view/section-catalogue-view.js";

export default class BoardPresenter {
  sectionHeroComponent = new SectionHeroView();
  sectionAdvantagesComponent = new SectionAdvantagesView();
  sectionFilterReasonComponent = new SectionFilterReasonView();
  sectionFilterColorComponent = new SectionFilterColorView();
  sectionCatalogueComponent = new SectionCatalogueView();
  constructor({ header, body, footer, main }) {
    this.header = header;
    this.body = body;
    this.footer = footer;
    this.main = main;
  }

  initMain() {
    render(this.sectionHeroComponent, this.main);
    render(this.sectionAdvantagesComponent, this.main);
    render(this.sectionFilterReasonComponent, this.main);
    render(this.sectionFilterColorComponent, this.main);
    render(this.sectionCatalogueComponent, this.main);
  }

  init() {
    this.initMain();
  }
}
