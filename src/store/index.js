import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
  },

  mutations: {
    setProducts: (state, value) => {
      state.products = value;
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        let { products } = await (
          await fetch("https://waydinjochem.github.io/Js-to-Vue.github.io/products.json")
        ).json();
        if (products) {
          context.commit("setProducts", products);
        } else {
          alert("Error");
        }
      } catch (e) {
        console.error(error);
      }
    },
  },
});
