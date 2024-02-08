<template>
  <div class="container border border-3 rounded shadow">
    <h3 class="border-bottom py-2">Produtos</h3>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productResults" :key="product.id">
          <td class="fw-medium text-danger text-decoration-underline">
            #{{ product.MaterialID }}
          </td>
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
