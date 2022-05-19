<template>
  <h2 class="text-gray-700 text-2xl font-medium text-left mb-5">
    Today on the NBA
  </h2>
  <div
    class="p-10 rounded-3xl bg-slate-400/30 max-w rounded overflow-hidden shadow-lg"
  >
    <h3 class="text-gray-700 text-3xl font-medium text-left m-2">Dashboard</h3>

    <div class="text-gray-700 text-2xl font-medium text-left m-2">
      {{ numGames }} game(s) today
    </div>
    <p class="text-gray-700 text-2xl font-medium text-left m-2">
      {{ vTeam }} @ {{ hTeam }} - {{ time }}
    </p>
    <p class="text-gray-700 text-2xl font-medium text-left m-2">
      {{ seriesStatus }}
    </p>
    <p
      id="live"
      class="animate-pulse text-red-500 text-3xl font-medium text-left m-2"
    ></p>

    <div class="grid grid-cols-2 gap-5">
      <div class="">
        <img
          class="float-left p-10 rounded-3xl bg-slate-700/30 max-w rounded overflow-hidden shadow-lg mb-10"
          id="away"
          src=""
          width="350"
        />
        <p class="text-gray-700 text-7xl mt-25 pt-50">{{ vScore }}</p>
      </div>
      <div class="">
        <img
          class="float-left p-10 rounded-3xl bg-slate-700/30 max-w rounded overflow-hidden shadow-lg mb-10"
          id="home"
          src=""
          width="350"
        />
        <p class="text-gray-700 text-7xl mt-25 pt-50">{{ hScore }}</p>
      </div>
      <p
        class="mt-10 rounded-3xl bg-slate-700/0 text-left rounded overflow-hidden text-gray-700 text-1xl"
      >
        *stats from nba.com*
      </p>
    </div>
  </div>
  <div
    class="mt-10 p-10 rounded-3xl bg-slate-400/30 max-w rounded overflow-hidden shadow-lg"
  >
    <h3 class="text-gray-700 text-3xl font-medium text-left m-2 mb-5">
      Highlights
    </h3>
    <div class="grid-rows-4">
      <p
        class="p-10 text-gray-700 text-2xl text-left rounded-3xl bg-slate-700/10 max-w rounded overflow-hidden shadow-lg mb-10"
      >
        {{ hl1 }}
      </p>
      <p
        class="p-10 text-gray-700 text-2xl text-left rounded-3xl bg-slate-700/10 max-w rounded overflow-hidden shadow-lg mb-10"
      >
        {{ hl2 }}
      </p>
      <p
        class="p-10 text-gray-700 text-2xl text-left rounded-3xl bg-slate-700/10 max-w rounded overflow-hidden shadow-lg mb-10"
      >
        {{ hl3 }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'get-request',
  data() {
    return {
      numGames: null,
      homeTeam: null,
      awayTeam: null,
      time: null,
      hTeam: null,
      vTeam: null,
      game: null,
      seriesStatus: null,
      hTeamLogo:
        'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/atl.png',
      vTeamLogo: null,
      hScore: null,
      vScore: null,
      gameID: null,
      hl1: null,
      hl2: null,
      hl3: null,
    };
  },
  async created() {
    const year = new Date().getFullYear();
    let month = new Date().getUTCMonth() + 1;
    month = '0' + month;
    let day = new Date().getDate();
    const urlDate = year + month + day;
    console.log(urlDate);
    // Simple GET request using fetch
    await fetch(`http://data.nba.net/10s/prod/v1/${urlDate}/scoreboard.json`)
      .then((response) => response.json())
      .then((data) => {
        this.time = data.games[0].startTimeEastern;
        let game = data.games[0];
        this.game = data.games[0];
        this.gameID = game.gameId;
        this.seriesStatus = game.playoffs.seriesSummaryText;
        this.hTeam = game.hTeam.triCode;
        this.vTeam = game.vTeam.triCode;
        this.numGames = data.games.length;

        let hTeam = game.hTeam.triCode;
        let vTeam = game.vTeam.triCode;

        this.hTriLower = hTeam.toLowerCase();
        this.vTriLower = vTeam.toLowerCase();
        let hTeamUrl = `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.hTriLower}.png`;
        let vTeamUrl = `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.vTriLower}.png`;

        let homeImage = document.getElementById('home');
        let awayImage = document.getElementById('away');

        console.log(homeImage);
        homeImage.setAttribute('src', hTeamUrl);
        awayImage.setAttribute('src', vTeamUrl);

        console.log(homeImage);
        const isLive = game.isGameActivated;
        let liveP = document.getElementById('live');
        this.hScore = game.hTeam.score;
        this.vScore = game.vTeam.score;
        console.log(isLive);
        if (isLive) {
          this.hScore = game.hTeam.score;
          this.vScore = game.vTeam.score;
          let quarter = game.period.current;
          console.log(quarter);
          if (quarter == '1') {
            liveP.innerText = `● Live - ${quarter}st quarter`;
          }
          if (quarter == '2') {
            liveP.innerText = `● Live - ${quarter}nd quarter`;
          }
          if (quarter == '3') {
            liveP.innerText = `● Live - ${quarter}rd quarter `;
          }
          if (quarter == '4') {
            liveP.innerText = `● Live - ${quarter}th quarter`;
          }
        }
        if (game.statusNum == 3) liveP.innerText = `Final`;
      })
      .then((data) =>
        fetch(
          `http://data.nba.net/data/10s/prod/v1/${urlDate}/${this.gameID}_preview_article.json`
        )
          .then((response2) => response2.json())
          .then((data2) => {
            let highlightParagraphs = data2.paragraphs;
            this.hl1 = highlightParagraphs[0].paragraph;
            this.hl2 = highlightParagraphs[1].paragraph;
            this.hl3 = highlightParagraphs[2].paragraph;
          })
      );
  },
};
</script>
