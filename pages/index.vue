<template>
  <div
    class="w-screen max-w-screen-sm mx-auto h-full p-8 flex flex-col justify-center items-center space-y-4"
  >
    <!-- Header -->
    <h1 class="text-3xl font-bold text-gray-900">30 Seconds</h1>

    <!-- Card -->
    <div class="bg-white border rounded w-full p-4">
      <div class="flex flex-col space-y-1">
        <template v-for="item of items">
          <span
            :key="item"
            class="py-2 px-4 rounded hover:bg-gray-200 cursor-pointer text-gray-800"
          >
            {{ item }}
          </span>
        </template>
      </div>
    </div>

    <!-- Progressbar -->
    <div class="relative pt-1 w-full">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span
            class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-gray-600 bg-gray-200"
          >
            Round duration
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-gray-600">
            {{ progress }}s
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          :style="{ width: percentage + '%' }"
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500 transistion ease-in-out duration-500"
        ></div>
      </div>
    </div>

    <!-- Refresh -->
    <button
      class="self-end border py-2 px-4 rounded bg-gray-600 hover:bg-gray-500 text-white transistion ease-in-out duration-75"
      @click="reset"
    >
      {{ button }}
    </button>
  </div>
</template>

<script>
import words from 'assets/words.json'

export default {
  data: () => ({
    items: [],
    n_items: 5,
    button: 'Herlaad',
    progress: 0,
    max: 30
  }),
  computed: {
    percentage() {
      return (this.progress / this.max) * 100
    }
  },
  mounted() {
    this.reset()

    setInterval(() => {
      if (this.progress < this.max) this.progress += 1
    }, 1000)
  },
  methods: {
    reset() {
      this.progress = 0
      this.items = []

      for (let i = 0; i < this.n_items; i++) {
        const n = Math.floor(Math.random() * words.length)
        this.items.push(words[n])
      }
    }
  }
}
</script>
