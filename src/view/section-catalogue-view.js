import { createElement } from "../framework/render.js";

function createSectionCatalogueTemplate() {
  return `
  <div class="catalogue" data-items="catalogue">
  <div class="container">
    <div class="catalogue__header">
      <h2 class="title title--h3 catalogue__title">Каталог</h2>
      <div class="catalogue__sorting">
        <div class="sorting-price">
          <h3 class="title sorting-price__title">Цена</h3><a class="sorting-price__link sorting-price__link--incr sorting-price__link--active" href="#" aria-label="сортировка по возрастанию цены">
            <svg class="sorting-price__icon" width="50" height="46" aria-hidden="true">
              <use xlink:href="#icon-increase-sort"></use>
            </svg></a><a class="sorting-price__link" href="#" aria-label="сортировка по убыванию цены">
            <svg class="sorting-price__icon" width="50" height="46" aria-hidden="true">
              <use xlink:href="#icon-descending-sort"></use>
            </svg></a>
        </div>
      </div>
    </div>
    <ul class="catalogue__list">
    
    </ul>
    <div class="catalogue__btn-wrap">
      <button class="btn btn--outlined catalogue__show-more-btn" type="button">больше букетов
      </button>
      <button class="btn-round btn-round--to-top btn-round--size-small catalogue__to-top-btn" type="button" aria-label="наверх">
        <svg width="80" height="85" aria-hidden="true" focusable="false">
          <use xlink:href="#icon-round-button"></use>
        </svg>
      </button>
    </div>
  </div>
</div>
  `;
}

export default class SectionCatalogueView {
  getTemplate() {
    return createSectionCatalogueTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
