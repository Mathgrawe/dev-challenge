<template>
  <div class="container border border-2">
    <h2>Pedido de Vendas</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sales in saleResults" :key="sales.id">
          <td>{{ sales.MaterialID }}</td>
          <td>{{ sales.MaterialName }}</td>
          <td>{{ sales.Quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    saleResults: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
