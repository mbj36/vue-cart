export default {
  addToCart: ({ commit }, product) => {
    commit('ADD_TO_CART', {
      id: product.id,
      name: product.name,
      price: product.price
    })
  },
  clearCart: ({ commit }) => {
    commit('CLEAR_CART')
  }
}
