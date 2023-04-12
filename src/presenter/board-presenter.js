import { render } from "../render.js";
import SectionHeroView from "../view/section-hero-view.js";
import SectionMissionView from "../view/section-mission-view.js";
import SectionAdvantagesView from "../view/section-advantages-view.js";
import SectionFilterReasonView from "../view/section-filter-reason-view.js";
import SectionFilterColorView from "../view/section-filter-color-view.js";
import SectionCatalogueView from "../view/section-catalogue-view.js";
import CatalogCardView from "../view/catalog-card-view.js";

export default class BoardPresenter {
  sectionHeroComponent = new SectionHeroView();
  sectionAdvantagesComponent = new SectionAdvantagesView();
  sectionMissionComponent = new SectionMissionView();
  sectionFilterReasonComponent = new SectionFilterReasonView();
  sectionFilterColorComponent = new SectionFilterColorView();
  sectionCatalogueComponent = new SectionCatalogueView();
  boardCatalogComponent = null;

  constructor({ header, body, footer, main, bouqueteModel }) {
    this.header = header;
    this.body = body;
    this.footer = footer;
    this.main = main;
    this.bouqueteModel = bouqueteModel;
  }

  initMain() {
    render(this.sectionHeroComponent, this.main);
    render(this.sectionMissionComponent, this.main);
    render(this.sectionAdvantagesComponent, this.main);
    render(this.sectionFilterReasonComponent, this.main);
    render(this.sectionFilterColorComponent, this.main);
    render(this.sectionCatalogueComponent, this.main);

    this.boardCatalogComponent =
      this.sectionCatalogueComponent.element.querySelector(".catalogue__list");

    for (let i = 0; i < this.boardBouquete.length; i++) {
      render(
        new CatalogCardView({
          bouquete: this.boardBouquete[i],
        }),
        this.boardCatalogComponent
      );
    }
  }

  init() {
    this.boardBouquete = [...this.bouqueteModel.getBouquete()];
    this.initMain();
  }
}
