<template>
  <div class="container">
    <p class="error-msg" :class="{ isShow: isWeatherLocale }">
      <span>選択された地域のデータはございません。</span>
      <span @click="close">✕</span>
    </p>
    <section class="mainvisual">
      <h1>気温に合ったおしゃれを。</h1>
      <p>その日の気温に合わせたファッションをアドバイス</p>
    </section>

    <div class="data-select">
      <div class="data-select__unit">
        <h2>どこに出かけますか？</h2>
        <div class="data-select__select-grop">
          <select
            v-model="selectPref"
            class="data-select__area"
            name="prefecture"
            @change="handleCity"
          >
            <option value="都道府県を選択" selected>都道府県を選択</option>
            <option v-for="(item, i) in pref" :key="i" :value="item.value">{{
              item.key
            }}</option>
          </select>
          <select
            v-model="selectCity"
            class="data-select__area"
            name="city"
            @change="translateLabel"
          >
            <option value="市区町村を選択" selected>市区町村を選択</option>
            <option
              v-for="(item, i) in cities.city"
              :key="i"
              :value="item.city"
              >{{ item.city }}</option
            >
          </select>
        </div>
      </div>

      <div class="data-select__unit">
        <h2>あなたの体質は？</h2>
        <div class="data-select__radio-grop">
          <label v-for="(item, i) in temperature" :key="i">
            <input
              type="radio"
              :value="item.value"
              :checked="item.isSelect"
              @change="handleTemperature"
            />
            <span>{{ item.label }}</span>
          </label>
        </div>
      </div>

      <button class="search-btn" @click="weather">
        <span v-if="!isWeather">天気情報を取得</span>
        <span v-else>最適な服装を検索</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { T as G } from '../store/global/types'

export default {
  head() {
    return {
      title: 'ホーム'
    }
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
    handleCity() {
      this.cities = this.city.filter(item => item.en === this.selectPref)[0]
      return this.$store.dispatch(`global/${G.RESET_SELECT_PREFECTURE}`)
    },
    translateLabel() {
      this.$store.dispatch(`global/${G.SET_SELECT_STATE_CITY}`, this.selectCity)
      this.$store.dispatch(
        `global/${G.AJAX_GET_TRANSLATE_CITY}`,
        this.selectCity
      )
    },
    weather() {
      this.$store.dispatch(`global/${G.AJAX_GET_WEATHER_DATA}`)
      if (this.isWeather) {
        this.$router.push('/result')
      }
    },
    handleTemperature(event) {
      const _val = event.target.value
      this.$store.dispatch(`global/${G.POST_USER_SENSITIVITY_DATA}`, _val)
    },
    close() {
      this.$store.dispatch(`global/${G.RESET_ERROR_BOOL}`, false)
    }
  },
  computed: {
    ...mapGetters('global', {
      pref: 'getPrefecture',
      city: 'getCity',
      selectedPref: 'getSelectPref',
      selectedCity: 'getSelectCity',
      temperature: 'getUserInfo',
      isWeather: 'getWeatherBool',
      isWeatherLocale: 'getWeatherLocaleBool'
    })
  },
  selectPref: {
    get() {
      return this.selectedPref
    },
    set(val) {
      this.$store.dispatch(`global/${G.SET_SELECT_PREFECTURE}`, val)
    }
  },
  selectCity: {
    get() {
      return this.selectedCity
    },
    set(val) {
      this.$store.dispatch(`global/${G.SET_SELECT_CITY}`, val)
    }
  }
}
</script>

<style lang="scss" scoped>
.mainvisual {
  background-image: url('../static/img/top-mainvisual@2x.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding-right: 20px;
  padding-left: 20px;
  height: 178px;
  padding-top: 48px;
}

.mainvisual h1 {
  font-size: 20px;
  line-height: 1;
  font-weight: normal;
}

.mainvisual p {
  line-height: 1;
  margin-top: 16px;
  font-size: 12px;
}

.data-select {
  margin-top: -32px;
  padding-right: 20px;
  padding-left: 20px;
}

.data-select__unit {
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.data-select__unit:nth-child(2) {
  margin-top: 32px;
}

.data-select__unit h2 {
  color: #016ddc;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  position: relative;
  overflow: hidden;
}

.data-select__unit h2:before {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
  border-top: 12px solid #016ddc;
  border-left: 12px solid #016ddc;
  border-right: 12px solid transparent;
  border-bottom: 12px solid transparent;
}

.data-select__select-grop {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
}

.data-select__area {
  font-size: 14px;
  color: #016ddc;
  padding: 0 16px 0 12px;
  height: 44px;
  border: 1px solid #016ddc;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  align-content: center;
  width: 48.23%;
  appearance: menulist;
}

.data-select__radio-grop {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
}

label {
  display: inline-block;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 36px;
  line-height: 1;
  width: 30.86%;
  font-size: 14px;
  border-radius: 6px;
  position: relative;
}

label span:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  margin: auto;
  display: block;
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 6px;
}

label span:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  margin: auto;
  display: block;
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 3px;
}

label:nth-child(1) {
  border: 1px solid #016ddc;
  background-color: #f5faff;
  color: #016ddc;
}

label:nth-child(1) span:before {
  border: 1px solid #016ddc;
}

label:nth-child(1) input:checked + span:after {
  background-color: #016ddc;
}

label:nth-child(2) {
  border: 1px solid #dc7f01;
  background-color: #fff9f0;
  color: #dc7f01;
}

label:nth-child(2) span:before {
  border: 1px solid #dc7f01;
}

label:nth-child(2) input:checked + span:after {
  background-color: #dc7f01;
}

label:nth-child(3) {
  border: 1px solid #ef5350;
  background-color: #fff8f5;
  color: #ef5350;
}

label:nth-child(3) span:before {
  border: 1px solid #ef5350;
}

label:nth-child(3) input:checked + span:after {
  background-color: #ef5350;
}

label input {
  display: none;
}

/*label input:checked {

}*/

.search-btn {
  border-radius: 24px;
  margin-top: 44px;
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
  border: none;
  font-size: 16px;
}

.error-msg {
  display: none;

  &.isShow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 0);
    color: #ef5350;
    background-color: #fff8f5;
    padding: 0.75rem 1.25rem;
    border: 1px solid #ef5350;
    border-radius: 0.25rem;
    width: calc(414px - 20px);
  }

  span {
    font-size: 16px;

    &:nth-of-type(2) {
      cursor: pointer;
    }
  }
}
</style>
