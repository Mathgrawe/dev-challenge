<template>
  <div class="container border border-3 rounded shadow">
    <h3 class="border-bottom py-2">Equipamento</h3>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="equipment in equipmentResults" :key="equipment.id">
          <td class="fw-medium text-danger text-decoration-underline">
            #{{ equipment.EquipmentID }}
          </td>
          <td>{{ equipment.EquipmentName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    equipmentResults: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
