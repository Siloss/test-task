<template>
  <div class="loader-button-container">
    <button class="load btn" v-show="!inProgress" @click="$emit('click')">
      <slot>load</slot>
    </button>
    <div class="progress" v-show="inProgress">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader-button",
  data: () => ({
    inProgress: false,
  }),
  methods: {
    startLoading() {
      this.inProgress = true;
    },
    stopLoading() {
      this.inProgress = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loader-button-container {
  button.load {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
}
</style>
