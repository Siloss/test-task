<template>
  <div id="modal" class="modal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  MaterialInstance: null, //non reactive data
  name: "empty-modal",
  mounted() {
    this.$options.MaterialInstance = M.Modal.init(this.$el);
  },
  beforeDestroy() {
    this.$options.MaterialInstance.destroy();
  },
  methods: {
    openModal() {
      this.$options.MaterialInstance.open();
    },
    closeModal() {
      this.$options.MaterialInstance.close();
    },
  },
};
</script>
