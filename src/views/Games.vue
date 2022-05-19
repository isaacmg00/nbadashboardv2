<template>
  <div class="m-0">
    <h2 class="text-gray-700 text-5xl font-bold text-left mb-5">Playoffs</h2>
    <div
      class="mt-10 p-10 rounded-3xl bg-slate-400/30 max-w rounded overflow-hidden shadow-lg"
    >
      <h3 class="text-gray-700 text-4xl font-medium text-left m-2 mb-5">
        Upcoming games this week:
      </h3>
      <div
        class="mt-10 p-10 rounded-3xl bg-red-400/30 max-w rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-106 hover:bg-red-400 duration-100 rounded-3xl..."
      >
        <p
          id="date1"
          class="text-gray-700 text-3xl font-bold text-left m-2 mb-5"
        >
          g1
        </p>
        <p id="g1" class="text-gray-700 text-3xl font-medium text-left m-2">
          g1
        </p>
      </div>

      <div
        class="mt-10 p-10 rounded-3xl bg-blue-400/30 max-w rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-106 hover:bg-blue-400 duration-100 ..."
      >
        <p
          id="date2"
          class="text-gray-700 text-3xl font-bold text-left m-2 mb-5"
        >
          g1
        </p>
        <p id="g2" class="text-gray-700 text-3xl font-medium text-left m-2">
          g1
        </p>
      </div>

      <div
        class="mt-10 p-10 rounded-3xl bg-red-400/30 max-w rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-106 hover:bg-red-400 duration-100 ..."
      >
        <p
          id="date3"
          class="text-gray-700 text-3xl font-bold text-left m-2 mb-5"
        >
          g1
        </p>
        <p id="g3" class="text-gray-700 text-3xl font-medium text-left m-2">
          g1
        </p>
      </div>

      <div
        class="mt-10 p-10 rounded-3xl bg-blue-400/30 max-w rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-106 hover:bg-blue-400 duration-100 ..."
      >
        <p
          id="date4"
          class="text-gray-700 text-3xl font-bold text-left m-2 mb-5"
        >
          g1
        </p>
        <p id="g4" class="text-gray-700 text-3xl font-medium text-left m-2">
          g1
        </p>
      </div>
      <div
        class="mt-10 p-10 rounded-3xl bg-red-400/30 max-w rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-106 hover:bg-red-400 duration-100 ..."
      >
        <p
          id="date5"
          class="text-gray-700 text-3xl font-bold text-left m-2 mb-5"
        >
          g1
        </p>
        <p id="g5" class="text-gray-700 text-3xl font-medium text-left m-2">
          g1
        </p>
      </div>
    </div>
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
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
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

        function getStringDate(date) {
          const d = date;
          let yr = d.substring(0, 4);
          let mm = d.substring(4, 6);
          if (mm < 10) {
            mm = d.substring(5, 6);
          }
          const dd = d.substring(6, 8);
          const textDate = new Date(yr, mm - 1, dd).getDay();
          let day = weekday[new Date(yr, mm - 1, dd).getDay()];
          let month = monthNames[new Date(yr, mm - 1, dd).getMonth()];
          console.log(month);
          return day + ', ' + month + ' ' + dd;
        }

        getStringDate('20220520');
        console.log(getStringDate('20220520'));

        game1 = data.league.standard[startDate];
        let date1 = document.getElementById('date1');
        date1.innerText = getStringDate(game1.startDateEastern);

        let g1 = document.getElementById('g1');
        let gameText = game1.gameUrlCode.substring(9);
        gameText =
          gameText.substring(0, 3) +
          ' vs. ' +
          gameText.substring(3) +
          ' ' +
          game1.startTimeEastern;
        g1.innerText = `Game ${game1.playoffs.gameNumInSeries}: ${gameText}`;

        game2 = data.league.standard[startDate + 1];
        let date2 = document.getElementById('date2');
        date2.innerText = getStringDate(game2.startDateEastern);
        let g2 = document.getElementById('g2');
        gameText = game2.gameUrlCode.substring(9);
        gameText =
          gameText.substring(0, 3) +
          ' vs. ' +
          gameText.substring(3) +
          ' ' +
          game2.startTimeEastern;
        g2.innerText = `Game ${game2.playoffs.gameNumInSeries}: ${gameText}`;

        game3 = data.league.standard[startDate + 2];
        let date3 = document.getElementById('date3');
        date3.innerText = getStringDate(game3.startDateEastern);
        let g3 = document.getElementById('g3');
        gameText = game1.gameUrlCode.substring(9);
        gameText =
          gameText.substring(0, 3) +
          ' vs. ' +
          gameText.substring(3) +
          ' ' +
          game3.startTimeEastern;
        g3.innerText = `Game ${game3.playoffs.gameNumInSeries}: ${gameText}`;

        game4 = data.league.standard[startDate + 3];
        let date4 = document.getElementById('date4');
        date4.innerText = getStringDate(game4.startDateEastern);
        let g4 = document.getElementById('g4');
        gameText = game4.gameUrlCode.substring(9);
        gameText =
          gameText.substring(0, 3) +
          ' vs. ' +
          gameText.substring(3) +
          ' ' +
          game4.startTimeEastern;
        g4.innerText = `Game ${game4.playoffs.gameNumInSeries}: ${gameText}`;

        game5 = data.league.standard[startDate + 4];
        let date5 = document.getElementById('date5');
        date5.innerText = getStringDate(game5.startDateEastern);
        let g5 = document.getElementById('g5');
        gameText = game1.gameUrlCode.substring(9);
        gameText =
          gameText.substring(0, 3) +
          ' vs. ' +
          gameText.substring(3) +
          ' ' +
          game5.startTimeEastern;
        g5.innerText = `Game ${game5.playoffs.gameNumInSeries}: ${gameText}`;

        console.log(game5);
      });
  },
};
</script>
