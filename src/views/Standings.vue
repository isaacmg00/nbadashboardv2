<template>
  <h2 class="text-gray-700 text-2xl font-medium text-left mb-5">
    Conference Standings
  </h2>
  <div
    class="p-10 rounded-3xl bg-slate-400/30 max-w rounded overflow-hidden shadow-lg grid grid-cols-2 grid-flow-col gap-4"
  >
    <div id="east" class="text-left text-gray-700 text-1xl p-5">
      EAST
      <div
        id="east"
        class="text-left font-bold text-gray-700 bg-blue-400/50 rounded-3xl text-2xl p-5 shadow-lg"
      >
        <div class="p-10">
          1. {{ e0 }} <img width="100" class="float-right" id="ep0" />
        </div>
        <div class="p-10">
          2. {{ e1 }} <img width="100" class="float-right" id="ep1" />
        </div>
        <div class="p-10">
          3. {{ e2 }} <img width="100" class="float-right" id="ep2" />
        </div>
        <div class="p-10">
          4. {{ e3 }} <img width="100" class="float-right" id="ep3" />
        </div>
        <div class="p-10">
          5. {{ e4 }} <img width="100" class="float-right" id="ep4" />
        </div>
        <div class="p-10">
          6. {{ e5 }} <img width="100" class="float-right" id="ep5" />
        </div>
        <div class="p-10">
          7. {{ e6 }} <img width="100" class="float-right" id="ep6" />
        </div>
        <div class="p-10">
          8. {{ e7 }} <img width="100" class="float-right" id="ep7" />
        </div>
        <div class="p-10">
          9. {{ e8 }} <img width="100" class="float-right" id="ep8" />
        </div>
        <div class="p-10">
          10. {{ e9 }} <img width="100" class="float-right" id="ep9" />
        </div>
        <div class="p-10">
          11. {{ e10 }} <img width="100" class="float-right" id="ep10" />
        </div>
        <div class="p-3">
          12. {{ e11 }} <img width="100" class="float-right" id="ep11" />
        </div>
        <div class="p-3">
          13. {{ e12 }} <img width="100" class="float-right" id="ep12" />
        </div>
        <div class="p-3">
          14. {{ e13 }} <img width="100" class="float-right" id="ep13" />
        </div>
        <div class="p-3">
          15. {{ e14 }} <img width="100" class="float-right" id="ep14" />
        </div>
      </div>
    </div>
    <div id="wast" class="text-left text-gray-700 text-1xl p-5">
      WEST
      <div
        id="east"
        class="text-left font-bold text-gray-700 bg-rose-600/50 rounded-3xl text-2xl p-5 shadow-lg"
      >
        <div class="p-3">1. {{ w0 }}</div>
        <div class="p-3">2. {{ w1 }}</div>
        <div class="p-3">3. {{ w2 }}</div>
        <div class="p-3">4. {{ w3 }}</div>
        <div class="p-3">5. {{ w4 }}</div>
        <div class="p-3">6. {{ w5 }}</div>
        <div class="p-3">7. {{ w6 }}</div>
        <div class="p-3">8. {{ w7 }}</div>
        <div class="p-3">9. {{ w8 }}</div>
        <div class="p-3">10. {{ w9 }}</div>
        <div class="p-3">11. {{ w10 }}</div>
        <div class="p-3">12. {{ w11 }}</div>
        <div class="p-3">13. {{ w12 }}</div>
        <div class="p-3">14. {{ w13 }}</div>
        <div class="p-3">15. {{ w14 }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'get-request',
  data() {
    return {
      e0: null,
      ep0: null,

      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      e8: null,
      e9: null,
      e10: null,
      e11: null,
      e12: null,
      e13: null,
      e14: null,
      w0: null,
      w1: null,
      w2: null,
      w3: null,
      w4: null,
      w5: null,
      w6: null,
      w7: null,
      w8: null,
      w9: null,
      w10: null,
      w11: null,
      w12: null,
      w13: null,
      w14: null,
    };
  },
  async created() {
    // Simple GET request using fetch
    await fetch(
      `http://data.nba.net/data/10s/prod/v1/current/standings_conference.json`
    )
      .then((response) => response.json())
      .then((data) => {
        data = data.league.standard.conference;
        let eastConference = data.east;
        let westConference = data.west;
        console.log(eastConference[0].teamSitesOnly.teamTricode);
        this.e0 = eastConference[0].teamSitesOnly.teamTricode;
        this.ep0 = this.e0.toLowerCase();
        let ep0 = document.getElementById('ep0');
        console.log(ep0);
        ep0.setAttribute(
          'src',
          'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/atl.png'
        );
        this.e1 = eastConference[1].teamSitesOnly.teamTricode;
        this.ep1 = this.e1.toLowerCase();
        let ep1 = document.getElementById('ep1');
        console.log(ep1);
        ep1.setAttribute(
          'src',
          'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/atl.png'
        );
        this.e2 = eastConference[2].teamSitesOnly.teamTricode;
        this.e3 = eastConference[3].teamSitesOnly.teamTricode;
        this.e4 = eastConference[4].teamSitesOnly.teamTricode;
        this.e5 = eastConference[5].teamSitesOnly.teamTricode;
        this.e6 = eastConference[6].teamSitesOnly.teamTricode;
        this.e7 = eastConference[7].teamSitesOnly.teamTricode;
        this.e8 = eastConference[8].teamSitesOnly.teamTricode;
        this.e9 = eastConference[9].teamSitesOnly.teamTricode;
        this.e10 = eastConference[10].teamSitesOnly.teamTricode;
        this.e11 = eastConference[11].teamSitesOnly.teamTricode;
        this.e12 = eastConference[12].teamSitesOnly.teamTricode;
        this.e13 = eastConference[13].teamSitesOnly.teamTricode;
        this.e14 = eastConference[14].teamSitesOnly.teamTricode;

        this.w0 = westConference[0].teamSitesOnly.teamTricode;
        this.w1 = westConference[1].teamSitesOnly.teamTricode;
        this.w2 = westConference[2].teamSitesOnly.teamTricode;
        this.w3 = westConference[3].teamSitesOnly.teamTricode;
        this.w4 = westConference[4].teamSitesOnly.teamTricode;
        this.w5 = westConference[5].teamSitesOnly.teamTricode;
        this.w6 = westConference[6].teamSitesOnly.teamTricode;
        this.w7 = westConference[7].teamSitesOnly.teamTricode;
        this.w8 = westConference[8].teamSitesOnly.teamTricode;
        this.w9 = westConference[9].teamSitesOnly.teamTricode;
        this.w10 = westConference[10].teamSitesOnly.teamTricode;
        this.w11 = westConference[11].teamSitesOnly.teamTricode;
        this.w12 = westConference[12].teamSitesOnly.teamTricode;
        this.w13 = westConference[13].teamSitesOnly.teamTricode;
        this.w14 = westConference[14].teamSitesOnly.teamTricode;
      });
  },
};
</script>
