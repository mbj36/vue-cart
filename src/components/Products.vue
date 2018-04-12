<template>
  <div>
    <h2>All products</h2>
    <p>{{getNumberOfProducts}} Products</p>
    <table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="product.id">
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>${{product.price}}</td>
          <td>
            <button @click='addToCart(product)' class='button is-info'>Add to cart</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['allProducts', 'getNumberOfProducts'])
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
</script>
