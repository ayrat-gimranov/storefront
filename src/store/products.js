//1 design store

let initialState = {
  products: [
    { name: 'tv', displayName: 'TV', category: 'electronics', description: 'Flat screen 60 inch TV', price: '$500', count: 15 },
    { name: 'cake', displayName: 'cake', category: 'food', description: 'strawberry cheesecake', price: '$20', count: 10 },
    { name: 'bananas', displayName: 'bananas', category: 'food', description: 'mini bananas from Peru', price: '$3', count: 16 },
    { name: 'toyota corolla', displayName: 'Toyota Corolla', category: 'vehicles', description: '2006 reliable sedan in clue color', price: '$2000', count: 1 },
    { name: 'doll', displayName: 'Doll', category: 'toys', description: 'Blond Barbie doll', price: '$40', count: 30 },
    { name: 'tv-stand', displayName: 'TV-stand', category: 'furniture', description: 'grey wooden TV stand, 20 inch tall', price: '$110', count: 10 },
    { name: 'chair', displayName: 'chair', category: 'furniture', description: 'cushioned, wooden, white in color', price: '$80', count: 16 },
  ],
  filteredList: []
}

//2 design actions

// export const changeActiveCategory = (category) => {
//   return {
//     type: 'CHANGE_CATEGORY',
//     payload: category
//   }
// }

// export const subtractCount = () => {
//   return {
//     type: 'PRODUCTS/SUBTRACT_COUNT',
//   }
// }

//3 design reducer

export const productsReducer = (state = initialState, action) => {

  let { type, payload } = action;
  switch (type) {
    default:
      return state
    case 'CHANGE_CATEGORY':
      console.log('hit CHANGE_CATEGORY action in productsReducer');
      return { ...state, filteredList: state.products.filter(product => product.category === payload) }
    case 'CART/ADD_TO_CART':

      let newProducts = state.products.map(product => {
        if (product.name === payload.name) {
          return { ...product, count: product.count - 1 }
        } else return product
      })

      return { ...state, products: newProducts, filteredList: state.filteredList.map(product => {
        if(product.name === payload.name) return {...product, count: product.count - 1}
        else return product      
      }) }
  }
};
