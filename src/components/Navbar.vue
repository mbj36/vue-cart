<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <router-link to="/" class="nav-item is-tab" exact-active-class="is-active">
              Shop
            </router-link>
            &emsp;
            <router-link to='/cart' class="button is-info">
              <span class="icon">
                <i class="fa fa-shopping-cart"></i>
              </span>
              <span>Checkout ({{itemsInCart}})</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      itemsInCart() {
        let cart = this.$store.getters.cartProducts
        console.log(cart)
        return cart.reduce((accum, item) => accum + item.quantity, 0)
      }
    }
  }
</script>

