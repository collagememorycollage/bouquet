import { render } from "../render.js";
import SectionHeroView from "../view/section-hero-view.js";
import SectionMissionView from "../view/section-mission-view.js";
import SectionAdvantagesView from "../view/section-advantages-view.js";
import SectionFilterReasonView from "../view/section-filter-reason-view.js";
import SectionFilterColorView from "../view/section-filter-color-view.js";
import SectionCatalogueView from "../view/section-catalogue-view.js";

export default class BoardPresenter {
  //   sectionHeroComponent = ;
  constructor({ header, body, footer, main }) {
    this.header = header;
    this.body = body;
    this.footer = footer;
    this.main = main;
  }

  initMain() {
    console.log(this.main);

    render(new SectionHeroView(), this.main);
  }

  init() {
    this.initMain();
    render(new SectionMissionView(), this.main);
    render(new SectionAdvantagesView(), this.main);
    render(new SectionFilterReasonView(), this.main);
    render(new SectionFilterColorView(), this.main);
    render(new SectionCatalogueView(), this.main);
  }
}
