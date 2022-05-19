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
        <div class="p-10">
          12. {{ e11 }} <img width="100" class="float-right" id="ep11" />
        </div>
        <div class="p-10">
          13. {{ e12 }} <img width="100" class="float-right" id="ep12" />
        </div>
        <div class="p-10">
          14. {{ e13 }} <img width="100" class="float-right" id="ep13" />
        </div>
        <div class="p-10 mb-10">
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
        <div class="p-10">
          1. {{ w0 }} <img width="100" class="float-right" id="wp0" />
        </div>
        <div class="p-10">
          2. {{ w1 }} <img width="100" class="float-right" id="wp1" />
        </div>
        <div class="p-10">
          3. {{ w2 }} <img width="100" class="float-right" id="wp2" />
        </div>
        <div class="p-10">
          4. {{ w3 }} <img width="100" class="float-right" id="wp3" />
        </div>
        <div class="p-10">
          5. {{ w4 }} <img width="100" class="float-right" id="wp4" />
        </div>
        <div class="p-10">
          6. {{ w5 }} <img width="100" class="float-right" id="wp5" />
        </div>
        <div class="p-10">
          7. {{ w6 }} <img width="100" class="float-right" id="wp6" />
        </div>
        <div class="p-10">
          8. {{ w7 }} <img width="100" class="float-right" id="wp7" />
        </div>
        <div class="p-10">
          9. {{ w8 }} <img width="100" class="float-right" id="wp8" />
        </div>
        <div class="p-10">
          10. {{ w9 }} <img width="100" class="float-right" id="wp9" />
        </div>
        <div class="p-10">
          11. {{ w10 }} <img width="100" class="float-right" id="wp10" />
        </div>
        <div class="p-10">
          12. {{ w11 }} <img width="100" class="float-right" id="wp11" />
        </div>
        <div class="p-10">
          13. {{ w12 }} <img width="100" class="float-right" id="wp12" />
        </div>
        <div class="p-10">
          14. {{ w13 }} <img width="100" class="float-right" id="wp13" />
        </div>
        <div class="p-10 mb-10">
          15. {{ w14 }} <img width="100" class="float-right" id="wp14" />
        </div>
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
      ep0: null,
      ep1: null,
      ep2: null,
      ep3: null,
      ep4: null,
      ep5: null,
      ep6: null,
      ep7: null,
      ep8: null,
      ep9: null,
      ep10: null,
      ep11: null,
      ep12: null,
      ep13: null,
      ep14: null,
      wp0: null,
      wp1: null,
      wp2: null,
      wp3: null,
      wp4: null,
      wp5: null,
      wp6: null,
      wp7: null,
      wp8: null,
      wp9: null,
      wp10: null,
      wp11: null,
      wp12: null,
      wp13: null,
      wp14: null,
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
        ep0.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep0}.png`
        );
        this.e1 = eastConference[1].teamSitesOnly.teamTricode;
        this.ep1 = this.e1.toLowerCase();
        let ep1 = document.getElementById('ep1');
        ep1.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep1}.png`
        );
        this.e2 = eastConference[2].teamSitesOnly.teamTricode;
        this.ep2 = this.e2.toLowerCase();
        let ep2 = document.getElementById('ep2');
        ep2.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep2}.png`
        );
        this.e3 = eastConference[3].teamSitesOnly.teamTricode;
        this.ep3 = this.e3.toLowerCase();
        let ep3 = document.getElementById('ep3');
        ep3.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep3}.png`
        );
        this.e4 = eastConference[4].teamSitesOnly.teamTricode;
        this.ep4 = this.e4.toLowerCase();
        let ep4 = document.getElementById('ep4');
        ep4.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep4}.png`
        );
        this.e5 = eastConference[5].teamSitesOnly.teamTricode;
        this.ep5 = this.e5.toLowerCase();
        let ep5 = document.getElementById('ep5');
        ep5.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep5}.png`
        );
        this.e6 = eastConference[6].teamSitesOnly.teamTricode;
        this.ep6 = this.e6.toLowerCase();
        let ep6 = document.getElementById('ep6');
        ep6.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep6}.png`
        );
        this.e7 = eastConference[7].teamSitesOnly.teamTricode;
        this.ep7 = this.e7.toLowerCase();
        let ep7 = document.getElementById('ep7');
        ep7.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep7}.png`
        );
        this.e8 = eastConference[8].teamSitesOnly.teamTricode;
        this.ep8 = this.e8.toLowerCase();
        let ep8 = document.getElementById('ep8');
        ep8.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep8}.png`
        );
        this.e9 = eastConference[9].teamSitesOnly.teamTricode;
        this.ep9 = this.e9.toLowerCase();
        let ep9 = document.getElementById('ep9');
        ep9.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep9}.png`
        );
        this.e10 = eastConference[10].teamSitesOnly.teamTricode;
        this.ep10 = this.e10.toLowerCase();
        let ep10 = document.getElementById('ep10');
        ep10.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep10}.png`
        );
        this.e11 = eastConference[11].teamSitesOnly.teamTricode;
        this.ep11 = this.e11.toLowerCase();
        let ep11 = document.getElementById('ep11');
        ep11.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep11}.png`
        );
        this.e12 = eastConference[12].teamSitesOnly.teamTricode;
        this.ep12 = this.e12.toLowerCase();
        let ep12 = document.getElementById('ep12');
        ep12.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep12}.png`
        );

        this.e13 = eastConference[13].teamSitesOnly.teamTricode;
        this.ep13 = this.e13.toLowerCase();
        let ep13 = document.getElementById('ep13');
        ep13.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep13}.png`
        );
        this.e14 = eastConference[14].teamSitesOnly.teamTricode;
        this.ep14 = this.e14.toLowerCase();
        let ep14 = document.getElementById('ep14');
        ep14.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep14}.png`
        );

        this.w0 = eastConference[0].teamSitesOnly.teamTricode;
        this.wp0 = this.e0.toLowerCase();
        let wp0 = document.getElementById('ep0');
        ep0.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep0}.png`
        );
        this.w1 = eastConference[1].teamSitesOnly.teamTricode;
        this.wp1 = this.e1.toLowerCase();
        let wp1 = document.getElementById('ep1');
        ep1.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep1}.png`
        );
        this.w2 = eastConference[2].teamSitesOnly.teamTricode;
        this.wp2 = this.e2.toLowerCase();
        let wp2 = document.getElementById('ep2');
        ep2.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep2}.png`
        );
        this.w3 = eastConference[3].teamSitesOnly.teamTricode;
        this.wp3 = this.e3.toLowerCase();
        let wp3 = document.getElementById('ep3');
        ep3.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep3}.png`
        );
        this.w4 = eastConference[4].teamSitesOnly.teamTricode;
        this.wp4 = this.e4.toLowerCase();
        let wp4 = document.getElementById('ep4');
        ep4.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep4}.png`
        );
        this.w5 = eastConference[5].teamSitesOnly.teamTricode;
        this.wp5 = this.e5.toLowerCase();
        let wp5 = document.getElementById('ep5');
        ep5.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep5}.png`
        );
        this.w6 = eastConference[6].teamSitesOnly.teamTricode;
        this.wp6 = this.e6.toLowerCase();
        let wp6 = document.getElementById('ep6');
        ep6.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep6}.png`
        );
        this.w7 = eastConference[7].teamSitesOnly.teamTricode;
        this.wp7 = this.e7.toLowerCase();
        let wp7 = document.getElementById('ep7');
        ep7.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep7}.png`
        );
        this.w8 = eastConference[8].teamSitesOnly.teamTricode;
        this.wp8 = this.e8.toLowerCase();
        let wp8 = document.getElementById('ep8');
        ep8.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep8}.png`
        );
        this.w9 = eastConference[9].teamSitesOnly.teamTricode;
        this.wp9 = this.e9.toLowerCase();
        let wp9 = document.getElementById('ep9');
        ep9.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep9}.png`
        );
        this.w10 = eastConference[10].teamSitesOnly.teamTricode;
        this.wp10 = this.e10.toLowerCase();
        let wp10 = document.getElementById('ep10');
        ep10.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep10}.png`
        );
        this.w11 = eastConference[11].teamSitesOnly.teamTricode;
        this.wp11 = this.e11.toLowerCase();
        let wp11 = document.getElementById('ep11');
        ep11.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep11}.png`
        );
        this.w12 = eastConference[12].teamSitesOnly.teamTricode;
        this.wp12 = this.e12.toLowerCase();
        let wp12 = document.getElementById('ep12');
        ep12.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep12}.png`
        );

        this.w13 = eastConference[13].teamSitesOnly.teamTricode;
        this.wp13 = this.e13.toLowerCase();
        let wp13 = document.getElementById('ep13');
        ep13.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep13}.png`
        );
        this.w14 = eastConference[14].teamSitesOnly.teamTricode;
        this.wp14 = this.e14.toLowerCase();
        let wp14 = document.getElementById('ep14');
        ep14.setAttribute(
          'src',
          `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.ep14}.png`
        );
      });
  },
};
</script>
