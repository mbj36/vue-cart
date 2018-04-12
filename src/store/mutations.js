export default {
  CLEAR_CART: state => (state.cart = []),
  ADD_TO_CART: (state, { id, name, price }) => {
    console.log(id)
    const record = state.cart.find(p => p.id === id)

    if (!record) {
      state.cart.push({
        id,
        name,
        price,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  }
}
