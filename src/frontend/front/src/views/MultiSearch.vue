<template>
  <div
    class="container-md custom-class d-flex flex-column align-items-center justify-content-center"
  >
    <img src="@/assets/images/logo_multisearch.png" class="img-fluid mb-4" />

    <Search @search-results-updated="updateTables" />

    <div class="container mt-3">
      <p class="text-secondary fs-6">
        Foram encontrados {{ totalResults }} resultados.
      </p>
    </div>

    <div class="container" v-if="totalResults === 0">
      <p class="text-secondary fs-6">Nenhum resultado encontrado.</p>
    </div>

    <SaleTable
      class="mt-3"
      v-if="saleResults.length > 0"
      :saleResults="saleResults"
    />
    <PurchaseTable
      class="my-3"
      v-if="purchaseResults.length > 0"
      :purchaseResults="purchaseResults"
    />
    <ProductTable
      class="my-3"
      v-if="productResults.length > 0"
      :productResults="productResults"
    />
    <EquipmentTable
      class="my-3"
      v-if="equipmentResults.length > 0"
      :equipmentResults="equipmentResults"
    />
    <WorkTable v-if="workResults.length > 0" :workResults="workResults" />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Search from "@/components/Search.vue";
import SaleTable from "@/components/SaleTable.vue";
import PurchaseTable from "@/components/PurchaseTable.vue";
import ProductTable from "@/components/ProductTable.vue";
import EquipmentTable from "@/components/EquipmentTable.vue";
import WorkTable from "@/components/WorkTable.vue";

export default {
  name: "Home",
  components: {
    SaleTable,
    PurchaseTable,
    EquipmentTable,
    ProductTable,
    WorkTable,
    Search,
  },
  data() {
    return {
      totalResults: 0,
      resultsByTable: {
        sales: [],
        purchase: [],
        product: [],
        equipment: [],
        work: [],
      },
    };
  },
  computed: {
    saleResults() {
      return this.resultsByTable.sales;
    },
    purchaseResults() {
      return this.resultsByTable.purchase;
    },
    productResults() {
      return this.resultsByTable.product;
    },
    equipmentResults() {
      return this.resultsByTable.equipment;
    },
    workResults() {
      return this.resultsByTable.work;
    },
  },
  methods: {
    updateTables(results) {
      this.totalResults = 0;

      for (const key in results) {
        if (Object.hasOwnProperty.call(results, key)) {
          this.totalResults += results[key].length;
          this.resultsByTable[key] = results[key];
        }
      }
    },
  },
};
</script>

<style>
@media (min-width: 768px) {
  .custom-class {
    max-width: 576px !important;
  }
}
</style>
