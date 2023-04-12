import { getRandomBouquete } from "../mocks/bouquete";

const BOUQUETE_COUNT = 8;

export default class BouqueteModel {
  #bouquete = Array.from({ length: BOUQUETE_COUNT }, getRandomBouquete);

  get bouquete() {
    return this.#bouquete;
  }
}
