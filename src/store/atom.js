import { selectorFamily, selector, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const themeState = atom({
  key: "themeModeState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const cartState = atom({
  key: "cartState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const getProducts = selector({
  key: "getProductsState",
  get: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products;
  },
});

export const getProductsByCategory = selectorFamily({
  key: "getProductsByCategoryState",
  get:
    (category) =>
    ({ get }) => {
      const productsList = get(getProducts);
      return productsList.filter((product) =>
        product.category.includes(category)
      );
    },
});

export const getProductById = selectorFamily({
  key: "getProductByIdState",
  get: (id) => async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return product;
  },
});
