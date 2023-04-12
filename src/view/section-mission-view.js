import { createElement } from "../framework/render.js";

function createMissionTemplate() {
  return `
  <section class="mission">
    <div class="container">
      <div class="mission__wrapper">
        <h2 class="title title--h3">Наша миссия</h2>
        <div class="mission__content">
          <div class="mission__quote">
            <p class="text text--quote">Для наших букетов мы отбираем самые свежие и&nbsp;яркие цветы со&nbsp; всего мира. Правильные условия хранения подарят вашим близким множество дней радости.</p>
          </div>
          <div class="mission__img">
            <picture>
              <source type="image/webp" srcset="img/content/mission.webp, img/content/mission@2x.webp 2x"><img src="img/content/mission.png" srcset="img/content/mission@2x.png 2x" width="623" height="623" alt="букет">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

export default class SectionMissionView {
  #element = null;

  get template() {
    return createMissionTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
