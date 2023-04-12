import { COLORS, PRISE, NAME, AUTHOR_PHOTO } from "../const";
import { getRandomArrayElement } from "../utils";

const mockBouquete = [
  {
    id: "1",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage:
      "http://localhost:9000/static/bouquets/preview/christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
  {
    id: "2",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage:
      "http://localhost:9000/static/bouquets/preview/christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
  {
    id: "3",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage:
      "http://localhost:9000/static/bouquets/preview/christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
  {
    id: "4",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage:
      "http://localhost:9000/static/bouquets/preview/christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
  {
    id: "5",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage: "christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
  {
    id: "6",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage: "christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
  {
    id: "7",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage: "christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
  {
    id: "8",
    title: getRandomArrayElement(NAME),
    description:
      "Cочетание полевых и садовых цветов: розы, львиный зев, чертополох, тюльпаны и эустома",
    type: "birthday",
    color: getRandomArrayElement(COLORS),
    price: getRandomArrayElement(PRISE),
    previewImage: "christie-kim.png",
    authorPhoto: getRandomArrayElement(AUTHOR_PHOTO),
  },
];

function getRandomBouquete() {
  return getRandomArrayElement(mockBouquete);
}

export { getRandomBouquete };
