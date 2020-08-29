<template>
  <div class="container-fluid">
    <div class="row py-3">
      <div class="col-sm-6 offset-sm-3">
        <button class="btn btn-success w-50" @click="increaseCount">Increase</button>
        <button class="btn btn-danger w-50" @click="decreaseCount">Decrease</button>
      </div>
      <div class="col-sm-6 offset-sm-3">
        <button class="btn btn-warning w-75 mx-auto btn-block" @click="resetCount">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    increaseCount() {
      this.$store.state.count += 1;
    },
    decreaseCount() {
      this.$store.state.count -= 1;
    },
    resetCount() {
      this.$store.state.count = 0;
    },
  },
};
</script>

<style>
</style>