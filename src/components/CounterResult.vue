<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="col-sm-6 offset-sm-3 text-center customizied">{ {{counter}} }</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
};
</script>

<style scoped>
.customizied {
  font-weight: bold;
  font-size: 3rem;
}
</style>