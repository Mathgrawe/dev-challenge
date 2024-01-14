<template>
  <div class="container border border-2">
    <h2>Pedido de Compra</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="purchase in purchaseResults" :key="purchase.id">
          <td>{{ purchase.PurchaseOrderID }}</td>
          <td>{{ purchase.MaterialName }}</td>
          <td>{{ purchase.Quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    purchaseResults: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
