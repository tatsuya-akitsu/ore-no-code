<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        tenki-and-fashion
      </h1>
      <h2 class="subtitle">
        天気 × ファッションサービスです
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <select name="prefecture" v-model="selectPref" @change="handleCity">
        <option v-for="(item, i) in pref" :key="i" :value="item.value">{{ item.key }}</option>
      </select>
      <select name="city" v-model="selectCity" @change="translateLabel">
        <option v-for="(item, i) in cities.city" :key="i" :value="item.city">{{ item.city }}</option>
      </select>
      <button @click="weather">天気取得</button>
      <div>
        <p v-for="(item, i) in temperature" :key="i"><input type="radio" :value="item.value" @change="handleTemperature" :checked="item.isSelect">{{ item.label }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { T as G } from '../store/global/types'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppLogo
  },
  data: () => {
    return {
      cities: []
    }
  },
  mounted() {
    this.$store.dispatch(`global/${G.FIREBASE_GET_PREFECTURE_DATA}`)
    this.$store.dispatch(`global/${G.FIREBASE_GET_CITIES_DATA}`)
    this.$store.dispatch(`global/${G.GET_USER_SENSITIVITY_DATA}`)
  },
  methods: {
    handleCity () {
      this.cities = this.city.filter(item => item.en === this.selectPref)[0]
      return this.$store.dispatch(`global/${G.RESET_SELECT_PREFECTURE}`)
    },
    translateLabel () {
      this.$store.dispatch(`global/${G.AJAX_GET_TRANSLATE_CITY}`, this.selectCity)
    },
    weather () {
      this.$store.dispatch(`global/${G.AJAX_GET_WEATHER_DATA}`)
    },
    handleTemperature (event) {
      let _val = event.target.value
      this.$store.dispatch(`global/${G.POST_USER_SENSITIVITY_DATA}`, _val)
    }
  },
  computed: {
    ...mapGetters('global', {
      myData: 'getInitUserInfo',
      pref: 'getPrefecture',
      city: 'getCity',
      selectedPref: 'getSelectPref',
      selectedCity: 'getSelectCity',
      temperature: 'getUserInfo'
    })
  },
  selectPref: {
    get() { return this.selectedPref },
    set(val) { this.$store.dispatch(`global/${G.SET_SELECT_PREFECTURE}`, val) }
  },
  selectCity: {
    get() { return this.selectedCity },
    set(val) { this.$store.dispatch(`global/${G.SET_SELECT_CITY}`, val) }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

