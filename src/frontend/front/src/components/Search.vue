<template>
  <div class="input-group">
    <input
      v-model="searchTerm"
      type="text"
      class="form-control"
      placeholder="Pesquisar..."
    />
    <div class="input-group-append">
      <button @click="search" class="btn btn-primary" type="button">
        <i class="bi bi-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      searchTerm: "",
      loading: false,
      resultsByTable: {
        equipment: [],
        product: [],
        purchase: [],
        sales: [],
        work: [],
      },
    };
  },
  methods: {
    search() {
      this.loading = true;
      axios
        .get(`http://localhost:3000/api/search/${this.searchTerm}`)
        .then((response) => {
          this.resultsByTable.sales = response.data
            .filter((result) => result.SalesOrderID)
            .map((result) => ({
              MaterialID: result.MaterialID,
              MaterialName: result.MaterialName,
              Quantity: result.Quantity,
            }));

          this.resultsByTable.equipment = response.data
            .filter((result) => result.EquipmentID)
            .map((result) => ({
              EquipmentID: result.EquipmentID,
              EquipmentName: result.EquipmentName,
            }));

          this.resultsByTable.purchase = response.data
            .filter((result) => result.PurchaseOrderID)
            .map((result) => ({
              PurchaseOrderID: result.PurchaseOrderID,
              MaterialName: result.MaterialName,
              Quantity: result.Quantity,
            }));

          this.resultsByTable.work = response.data
            .filter((result) => result.WorkforceID)
            .map((result) => ({
              WorkforceID: result.WorkforceID,
              Name: result.Name,
              Shift: result.Shift,
            }));

          this.resultsByTable.product = response.data
            .filter((result) => result.MaterialID)
            .map((result) => ({
              MaterialID: result.MaterialID,
              MaterialName: result.MaterialName,
            }));

          this.$emit("search-results-updated", this.resultsByTable);
        })
        .catch((error) => {
          console.error("Erro na busca:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
