<template>
  <div class="container border border-2">
    <h2>Mão de Obra</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Shift</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="work in workResults" :key="work.id">
          <td>{{ work.WorkforceID }}</td>
          <td>{{ work.Name }}</td>
          <td>{{ work.Shift }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    workResults: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
