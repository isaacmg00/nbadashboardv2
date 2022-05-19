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
    const firstDate = new Date(2022, 4, 19);
    let today = new Date();

    function daysBetween(one, another) {
      return Math.round(Math.abs(+one - +another) / 8.64e7);
    }

    let gap = daysBetween(firstDate, today);
    let startDate = 1374 + gap;
    // Simple GET request using fetch
    await fetch(`http://data.nba.net/data/10s/prod/v1/2021/schedule.json`)
      .then((response) => response.json())
      .then((data) => {
        let game1, game2, game3, game4, game5;
        game1 = data.league.standard[startDate];
        game2 = data.league.standard[startDate + 1];
        game3 = data.league.standard[startDate + 2];
        game4 = data.league.standard[startDate + 3];
        game5 = data.league.standard[startDate + 4];

        console.log(game1);
      });
  },
};
</script>
