// Импорт вендоров и утилит, не удаляйте его
import "./vendor";
import { ImageSlider } from "./utils/image-slider";
import { iosVhFix } from "./utils/ios-vh-fix";
import { modals, initModals } from "./modals/init-modals";
import { render } from "../src/render.js";
import SectionHeroView from "../src/viev/section-hero-view.js";
import SectionMissionView from "../src/viev/section-mission-view.js";
import SectionAdvantagesView from "../src/viev/section-advantages-view.js";
import SectionFilterReasonView from "../src/viev/section-filter-reason-view.js";
import SectionFilterColorView from "./viev/section-filter-color-view.js";
import SectionCatalogueView from "../src/viev/section-catalogue-view.js";
// import BoardPresenter from "./presenter/board-presenter.js";
// Ваши импорты...

// const mainPresenter = new BoardPresenter({
//   header: siteHeaderElement,
//   main: siteMainElement,
//   footer: siteFooterElement,
//   body: siteBodyElement,
// });

const siteMainElement = document.querySelector("main");
const siteBodyElement = document.querySelector("body");
const siteFooterElement = document.querySelector(".footer");
const siteHeaderElement = document.querySelector(".header");

render(new SectionHeroView(), siteMainElement);
render(new SectionMissionView(), siteMainElement);
render(new SectionAdvantagesView(), siteMainElement);
render(new SectionFilterReasonView(), siteMainElement);
render(new SectionFilterColorView(), siteMainElement);
render(new SectionCatalogueView(), siteMainElement);
// mainPresenter.init();
// Код для работы попапов, не удаляйте его
window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();

  window.addEventListener("load", () => {
    // Инициализация слайдера
    const imageSlider = new ImageSlider(".image-slider");
    imageSlider.init();

    // Инициализация попапов
    initModals();
  });

  // Пример кода для открытия попапа
  document
    .querySelector(".element-which-is-open-popup")
    .addEventListener("click", () => modals.open("popup-data-attr"));

  // Код отработает, если разметка попапа уже отрисована в index.html

  // Если вы хотите рисовать разметку попапа под каждое "открытие",
  // то не забудьте перенесети в код addEventListener инициализацию слайдера

  // ------------

  // Ваш код...
});
