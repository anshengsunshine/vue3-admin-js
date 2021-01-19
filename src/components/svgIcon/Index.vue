<template>
  <svg class="svg_calss" :class="className">
    <use :href="'#icon-' + iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  }
};
</script>
<style lang="scss" scoped></style>
