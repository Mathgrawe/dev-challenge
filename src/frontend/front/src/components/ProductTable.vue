<template>
  <div class="container border border-2">
    <h2>Produtos</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productResults" :key="product.id">
          <td>{{ product.MaterialID }}</td>
          <td>{{ product.MaterialName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    productResults: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
