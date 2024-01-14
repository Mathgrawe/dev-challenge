<template>
  <div class="container border border-2">
    <h2>Equipamento</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="equipment in equipmentResults" :key="equipment.id">
          <td>{{ equipment.EquipmentID }}</td>
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
