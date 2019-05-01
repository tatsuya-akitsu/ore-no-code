<template>
  <div class="container">
    <div class="user-selected-data">
      <div class="weather-info">
        <div class="weather-info__inner">
          <h2 class="weather-info__prefectures-name">
            {{ weather.city }}の天気
          </h2>
          <div class="weather-info__layout">
            <div class="whether-icon">
              <img
                :src="
                  `http://openweathermap.org/img/w/${
                    weather.weather.weather.icon
                  }.png`
                "
                alt=""
              />
            </div>
            <div class="temperature">
              <p class="temperature__high">{{ weather.weather.temp_max }}</p>
              <p class="temperature__low">{{ weather.weather.temp_min }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="constitution">
        <div class="constitution__inner">
          <h2 class="constitution__heading">あなたの体質</h2>
          <div class="constitution__layout">
            <div class="constitution__icon">
              <img :src="`/img/${weather.temperature.image}`" alt="" />
            </div>
            <p class="constitution__text constitution__text--hot">
              {{ weather.temperature.label }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fashion-image__wrapper">
      <img class="fashion-image" :src="`/img/${weather.result.image}`" alt="" />
    </div>

    <section class="fashion-desc">
      <h2 class="fashion-desc__heading">{{ weather.result.title }}</h2>
      <p class="fashion-desc__text" v-html="weather.result.text"></p>
    </section>
    <a class="back-to-top-btn" @click="resetLocalData">トップに戻る</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { T as G } from '../../store/global/types'

export default {
  head() {
    return {
      title: '本日のおすすめ'
    }
  },
  methods: {
    resetLocalData() {
      this.$store.dispatch(`global/${G.RESET_LOCAL_DATA}`)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters('global', {
      weather: 'getResultData'
    })
  }
}
</script>

<style scoped>
.container {
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
}

.user-selected-data {
  display: flex;
  justify-content: space-between;
}

.weather-info,
.constitution {
  padding: 1px;
  border-radius: 6px;
  background: linear-gradient(135deg, #016ddc, #56d6ff);
  max-width: 280px;
  width: 47.16%;
}

.weather-info__inner,
.constitution__inner {
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #fff;
  border-radius: 5px;
  height: 100%;
}

.weather-info__prefectures-name,
.constitution__heading {
  font-size: 14px;
  color: #016ddc;
  text-align: center;
  line-height: 1;
  font-weight: normal;
}

.weather-info__layout {
  max-width: 118px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-content: center;
  margin-top: 16px;
}

.whether-icon {
  padding-right: 12.17%;
  margin-right: 12.17%;
  position: relative;
}

.whether-icon:before {
  display: block;
  width: 1px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  content: '';
  background-color: #eee;
}

.temperature {
  font-weight: 600;
  width: 44px;
  height: 40px;
  position: relative;
}

.temperature:before {
  display: block;
  content: '';
  width: 1px;
  height: 44px;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: #bbb;
}

.temperature__high {
  color: #ef5350;
  position: absolute;
  top: 0;
  left: 0;
}

.temperature__low {
  color: #016ddc;
  margin-left: auto;
  position: absolute;
  bottom: 0;
  right: 0;
}

.constitution__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  max-width: 100px;
  margin-right: auto;
  margin-left: auto;
}

.constitution__text {
  font-size: 12px;
  line-height: 1;
  padding: 6px 8px;
  border-radius: 6px;
}

.constitution__text--hot {
  color: #ef5350;
  border: 1px solid #ef5350;
  background-color: #fff8f5;
}

.constitution__text--nomal {
  color: #dc7f01;
  border: 1px solid #dc7f01;
  background-color: #fff9f0;
}

.constitution__text--cold {
  color: #016ddc;
  border: 1px solid #016ddc;
  background-color: #f5faff;
}

.fashion-image__wrapper {
  margin-top: 29px;
  text-align: center;
}

.fashion-image {
  width: 100%;
  max-width: 260px;
  margin-right: auto;
  margin-left: auto;
}

.fashion-desc {
  margin-top: 30px;
}

.fashion-desc__heading {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  color: #016ddc;
}

.fashion-desc__text {
  margin-top: 16px;
  line-height: 1.8;
}

.back-to-top-btn {
  border-radius: 24px;
  margin-top: 48px;
  display: block;
  line-height: 1;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  max-width: 300px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: #016ddc;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
}
</style>
