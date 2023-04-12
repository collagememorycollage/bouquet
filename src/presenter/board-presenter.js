import { render } from "../render.js";
import SectionHeroView from "../view/section-hero-view.js";
import SectionMissionView from "../view/section-mission-view.js";
import SectionAdvantagesView from "../view/section-advantages-view.js";
import SectionFilterReasonView from "../view/section-filter-reason-view.js";
import SectionFilterColorView from "../view/section-filter-color-view.js";
import SectionCatalogueView from "../view/section-catalogue-view.js";
import CatalogCardView from "../view/catalog-card-view.js";
import PopupView from "../view/popup-view.js";

export default class BoardPresenter {
  #sectionHeroComponent = new SectionHeroView();
  #sectionAdvantagesComponent = new SectionAdvantagesView();
  #sectionMissionComponent = new SectionMissionView();
  #sectionFilterReasonComponent = new SectionFilterReasonView();
  #sectionFilterColorComponent = new SectionFilterColorView();
  #sectionCatalogueComponent = new SectionCatalogueView();
  #boardCatalogComponent = null;
  #boardBouquete = [];
  #popupComponent = new PopupView();

  #header = null;
  #body = null;
  #footer = null;
  #main = null;
  #bouqueteModel = null;
  constructor({ header, body, footer, main, bouqueteModel }) {
    this.#header = header;
    this.#body = body;
    this.#footer = footer;
    this.#main = main;
    this.#bouqueteModel = bouqueteModel;
  }

  initMain() {
    render(this.#sectionHeroComponent, this.#main);
    render(this.#sectionMissionComponent, this.#main);
    render(this.#sectionAdvantagesComponent, this.#main);
    render(this.#sectionFilterReasonComponent, this.#main);
    render(this.#sectionFilterColorComponent, this.#main);
    render(this.#sectionCatalogueComponent, this.#main);

    this.#boardCatalogComponent = this.#sectionCatalogueComponent.element.querySelector(".catalogue__list");
    // this.#boardCatalogBtn = this.#sectionCatalogueComponent.element.querySelector('.catalogue__btn-wrap');

    this.#renderBoardBouquetCard();
    render(new PopupView({
      bouquete: this.#boardBouquete,
    }), this.#body);
  }

  init() {
    this.#boardBouquete = [...this.#bouqueteModel.bouquete];
    this.initMain();
  }

  #renderBoardBouquetCard(){
    for (let i = 1; i < this.#boardBouquete.length; i++) {
      debugger;
      const catalogBouqueteCard = new CatalogCardView({bouquete: this.#boardBouquete[i]});
      catalogBouqueteCard.element.querySelector('.item-card').addEventListener('click', ()=> {
        openPopup();
      })
      
      render(catalogBouqueteCard, this.#boardCatalogComponent);

    }
    const openPopup = () =>{
      console.log('asdas');
    }
  }


}
