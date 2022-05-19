<template>
  <h3 class="text-gray-700 text-3xl font-medium">Games</h3>
  <h3 class="text-gray-700 text-5xl font-medium">{{ totalVuePackages }}</h3>
</template>
<script>
export default {
  name: 'get-request',
  data() {
    return {
      totalVuePackages: null,
    };
  },
  created() {
    // Simple GET request using fetch
    fetch('https://api.npms.io/v2/search?q=vue')
      .then((response) => response.json())
      .then((data) => (this.totalVuePackages = data.total));
  },
};
</script>
