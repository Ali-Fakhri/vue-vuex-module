<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="col-sm-6 offset-sm-3 text-center customizied">{ {{exactCount}} }</div>
      <div class="col-sm-6 offset-sm-3 text-center">The Double: {{ doubleCount }}</div>
      <div class="col-sm-6 offset-sm-3 text-center">{{ oddOrEven }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["exactCount", "doubleCount", "oddOrEven"]),
  },
};
</script>

<style scoped>
.customizied {
  font-weight: bold;
  font-size: 3rem;
}
</style>