// Импорт вендоров и утилит, не удаляйте его
import "./vendor";
import { ImageSlider } from "./utils/image-slider";
import { iosVhFix } from "./utils/ios-vh-fix";
import { modals, initModals } from "./modals/init-modals";

// import BoardPresenter from "./presenter/board-presenter.js";
// Ваши импорты...
import BoardPresenter from "./presenter/board-presenter.js";

// const mainPresenter = new BoardPresenter({
//   header: siteHeaderElement,
//   main: siteMainElement,
//   footer: siteFooterElement,
//   body: siteBodyElement,
// });

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
  const siteMainElement = document.querySelector("main");
  const siteBodyElement = document.querySelector("body");
  const siteFooterElement = document.querySelector("footer");
  const siteHeaderElement = document.querySelector("header");

  const mainPresenter = new BoardPresenter({
    main: siteMainElement,
    body: siteBodyElement,
    footer: siteFooterElement,
    header: siteHeaderElement,
  });
  mainPresenter.init();
});
