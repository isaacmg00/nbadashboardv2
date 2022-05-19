<template>
  <h2 class="text-gray-700 text-2xl font-medium text-left mb-5">
    Today on the NBA
  </h2>
  <div
    class="mt-10 p-10 rounded-3xl bg-slate-400/30 max-w rounded overflow-hidden shadow-lg"
  >
    <h3 class="text-gray-700 text-3xl font-medium text-left m-2 mb-5">
      Upcoming Games:
    </h3>
    <p class="text-gray-700 text-3xl font-medium text-left m-2 mb-5">g1</p>
    <p class="text-gray-700 text-3xl font-medium text-left m-2 mb-5">g1</p>
    <p class="text-gray-700 text-3xl font-medium text-left m-2 mb-5">g1</p>
    <p class="text-gray-700 text-3xl font-medium text-left m-2 mb-5">g1</p>
    <p class="text-gray-700 text-3xl font-medium text-left m-2 mb-5">g1</p>
  </div>
</template>
<script>
export default {
  name: 'get-request',
  data() {
    return {
      game1: null,
      game2: null,
      game3: null,
      game4: null,
      game5: null,
    };
  },
  async created() {
    // Simple GET request using fetch
    await fetch(`http://data.nba.net/10s/prod/v1/${urlDate}/scoreboard.json`)
      .then((response) => response.json())
      .then((data) => {})
      .then((data) =>
        fetch(
          `http://data.nba.net/data/10s/prod/v1/${urlDate}/${this.gameID}_preview_article.json`
        )
      );
  },
};
</script>
