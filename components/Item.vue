<template>
  <span
    class="py-2 px-4 rounded hover:bg-gray-200 cursor-pointer"
    :class="{
      'text-gray-500 line-through': selected,
      'text-gray-800': !selected
    }"
    @click="selected = !selected"
  >
    {{ value }}
  </span>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String
    }
  },
  data: () => ({
    selected: false
  })
}
</script>
