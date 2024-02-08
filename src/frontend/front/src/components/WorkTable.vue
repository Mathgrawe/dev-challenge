<template>
  <div class="container border border-3 rounded shadow mb-5">
    <h3 class="border-bottom py-2">Mão de Obra</h3>
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
          <td class="fw-medium text-danger text-decoration-underline">
            {{ work.WorkforceID }}
          </td>
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
