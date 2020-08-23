<template>
  <div
    class="w-screen max-w-screen-sm mx-auto h-full p-8 flex flex-col justify-center items-center space-y-4"
  >
    <!-- Header -->
    <h1 class="text-3xl font-bold text-gray-900 leading-4">30 Seconds</h1>
    <div class="font-light text-gray-700">
      Add a new word to the list
    </div>

    <!-- Input -->
    <input
      v-model="value"
      class="bg-white focus:outline-none border border-gray-300 focus:border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      type="text"
      placeholder="A new word"
    />

    <!-- Refresh -->
    <button
      class="self-end border py-2 px-4 rounded bg-gray-600 hover:bg-gray-500 text-white transistion ease-in-out duration-75"
      @click="add"
    >
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: '',
    button: 'Voeg toe'
  }),
  methods: {
    add() {
      /* Add the word to the list. */
      this.$axios.post('/add', {
        value: this.value
      })

      this.value = ''
    }
  }
}
</script>
