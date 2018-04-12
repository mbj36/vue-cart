<template>
  <div>
    <h1>Your cart</h1>
    <span v-if="!cartProducts.length">
      Your cart is Empty
      <router-link to="/">Go Shopping</router-link>
    </span>
    <table class="table is-striped" v-show="cartProducts.length">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in cartProducts" :key="p.names">
          <td>{{ p.name }}</td>
          <td>${{ p.price }}</td>
          <td>{{ p.quantity }}</td>
        </tr>
        <tr>
          <td>
            <b>Total:</b>
          </td>
          <td></td>
          <td>
            <b>${{ total }}</b>
          </td>
        </tr>
      </tbody>

    </table>
    <p>
      <button v-show="cartProducts.length" class='button is-primary' @click='checkout'>Checkout</button>
    </p>
    <br/>
    <p>
      <button v-show="cartProducts.length" @click="clearCart" class="button is-primary">Clear Cart</button>
    </p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['cartProducts']),
      total() {
        return this.cartProducts.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      checkout() {
        alert('Pay us $' + this.total)
      },
      ...mapActions(['clearCart'])
    }
  }
</script>
