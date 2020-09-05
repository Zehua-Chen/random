<template>
  <button :class="className" v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    block: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    onClick(event: MouseEvent) {
      this.$emit("click", event);
    },
  },
  computed: {
    className() {
      let classes: string[] = ["btn", "btn-primary"];

      if (this.$props.block) {
        classes.push("btn-block");
      }

      return classes.join(" ");
    },
  },
});
</script>