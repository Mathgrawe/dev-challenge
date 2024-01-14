<template>
  <div
    class="container d-flex flex-column align-items-center justify-content-center text-center"
  >
    <img
      src="@/assets/images/logo_multisearch.png"
      class="img-fluid mb-4"
      alt="Logo Multisearch"
    />

    <Search @search-results-updated="updateTables" />

    <div class="d-flex justify-content-start align-items-start mt-3">
      <p class="text-start">Foram encontrados {{ totalResults }} resultados</p>
    </div>

    <div v-if="totalResults === 0">
      <p>Nenhum resultado encontrado.</p>
    </div>

    <SaleTable v-if="saleResults.length > 0" :saleResults="saleResults" />
    <PurchaseTable
      v-if="purchaseResults.length > 0"
      :purchaseResults="purchaseResults"
    />
    <ProductTable
      v-if="productResults.length > 0"
      :productResults="productResults"
    />
    <EquipmentTable
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
