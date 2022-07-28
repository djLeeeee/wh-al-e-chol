<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="navbar">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          id="menuButton"
        />

        <q-toolbar-title>
          <router-link to="/" class="home-link">술고래 매장 관리</router-link>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <q-item clickable tag="a" router-link to="/">
          <q-item-section avatar>
            <q-icon name="text_snippet" />
          </q-item-section>
          <q-item-section>
            <q-item-label>DATABASE</q-item-label>
            <q-item-label caption>주류 재고 데이터 관리</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" router-link to="/analysis">
          <q-item-section avatar>
            <q-icon name="analytics" />
          </q-item-section>
          <q-item-section>
            <q-item-label>ANALYTIC</q-item-label>
            <q-item-label caption>데이터 분석</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" router-link to="/request">
          <q-item-section avatar>
            <q-icon name="outgoing_mail" />
          </q-item-section>
          <q-item-section>
            <q-item-label>REQUEST</q-item-label>
            <q-item-label caption>요청 보내기</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
  @font-face {
    font-family: 'MaruBuri';
    font-weight: 400; 
    font-style: normal; 
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/naver/MaruBuri-Regular.woff2) format('woff2');
    font-display: swap;
  }

  @font-face {
      font-family: 'SeoulHangangC';
      font-weight: 300;
      font-style: normal;
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangCLight.eot');
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangCLight.eot?#iefix') format('embedded-opentype'),
          url('https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangCLight.woff2') format('woff2'),
          url('https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangCLight.woff') format('woff'),
          url('https://cdn.jsdelivr.net/gh/webfontworld/seoulhangang/SeoulHangangCLight.ttf') format("truetype");
      font-display: swap;
  }

  .home-link {
    color: white;
    text-decoration: none;
    transition: .3s;
  }

  .home-link:hover {
    color: #F0C2C2;
    transform: scale(1.1);
  }

  .navbar {
    background-color: #203864;
    font-family: 'MaruBuri';
  }


</style>

<script>
  import { ref } from 'vue'

  export default {
    name: 'LayoutDefault',

    components: {
      
    },

    setup () {
      return {
        leftDrawerOpen: ref(false)
      }
    }
  }
</script>
