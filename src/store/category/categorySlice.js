import { createSlice } from "@reduxjs/toolkit";


    const initialState = {
        category: [
          { title: 'burger', en: 'Burgers', image: '/img/burger.png' },
          { title: 'snack', en: 'Snacks', image: '/img/snack.png' },
          { title: 'hot-dog', en: 'Hot-Dogs', image: '/img/hot-dog.png' },
          { title: 'combo', en: 'Combo', image: '/img/combo.png' },
          { title: 'shawarma', en: 'Shawarma', image: '/img/shawarma.png' },
          { title: 'pizza', en: 'Pizza', image: '/img/pizza.png' },
          { title: 'wok', en: 'Wok', image: '/img/wok.png' },
          { title: 'dessert', en: 'Desserts', image: '/img/dessert.png' },
          { title: 'sauce', en: 'Sauces', image: '/img/sauce.png' },
        ],
        error: '',
        activeCategory: 0,
      };

const categorySlice = createSlice ({
    name: "category" ,
    initialState ,
    reducers: {
changeCategory(state, action) {
  //console.log("action: ", action);
  //console.log("state: ", state);

  state.activeCategory = action.payload.indexCategory
}
}
});

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;