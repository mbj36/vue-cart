export default {
  allProducts: state => state.products,
  getNumberOfProducts: state => (state.products ? state.products.length : 0),
  cartProducts: state => {
    return state.cart.map(({ id, quantity }) => {
      const product = state.cart.find(p => p.id === id)
      return {
        name: product.name,
        price: product.price,
        quantity
      }
    })
  }
}
