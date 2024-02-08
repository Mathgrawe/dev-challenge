<template>
  <div class="container border border-3 rounded shadow">
    <h3 class="border-bottom py-2">Pedido de Vendas</h3>
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
          <td class="fw-medium text-danger text-decoration-underline">
            #{{ sales.MaterialID }}
          </td>
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
