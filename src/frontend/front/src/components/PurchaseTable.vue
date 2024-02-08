<template>
  <div class="container border border-3 rounded shadow">
    <h3 class="border-bottom py-2">Pedido de Compra</h3>
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
          <td class="fw-medium text-danger text-decoration-underline">
            #{{ purchase.PurchaseOrderID }}
          </td>
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
