<template>
  <div class="container-fluid">
    <div class="row py-3">
      <div class="col-sm-6 offset-sm-3">
        <button class="btn btn-success w-50" @click="increase">Increase</button>
        <button class="btn btn-danger w-50" @click="decreament">Decrease</button>
      </div>
      <div class="col-sm-6 offset-sm-3">
        <button class="btn btn-warning w-75 mx-auto btn-block" @click="resetAll">Reset</button>
      </div>
      <div class="col-sm-6 offset-sm-3">
        <hr />
        <button class="btn btn-success w-50" @click="asyncIncrease">Async Increase</button>
        <button
          class="btn btn-danger w-50"
          @click="decreaseByAmount({by: 5, time: 500})"
        >Decrease By 5 Within Time</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapMutations(["increament", "decreament", "resetAll"]),
    ...mapActions(["increase", "asyncIncrease", "decreaseByAmount"]),
  },
};
</script>

<style>
</style>