import { T } from './types'

export const mutations = {
  [T.FIREBASE_GET_PREFECTURE_DATA](state, res) {
    const _pref = []
    for (const [key, value] of Object.entries(res)) {
      const _obj = { key, value }
      _pref.push(_obj)
    }
    state.prefectures = _pref
  },
  [T.FIREBASE_GET_CITIES_DATA](state, res) {
    state.cities.push(res)
  },
  [T.SET_SELECT_STATE_CITY](state, val) {
    state.resultCity = val
  },
  [T.AJAX_GET_TRANSLATE_CITY](state, val) {
    state.select.weather = val
  },
  [T.SET_SELECT_PREFECTURE](state, val) {
    state.select.pref = val
  },
  [T.RESET_SELECT_PREFECTURE](state) {
    state.select.pref = ''
  },
  [T.SET_SELECT_CITY](state, val) {
    state.select.city = val
  },
  [T.AJAX_GET_WEATHER_DATA](state, arr) {
    const _curDt = this.$moment()
    let _nearArr = []
    _nearArr = arr.filter(item => _curDt.isBetween(item.dt_txt))
    Array.prototype.getLastObj = function() {
      return this[this.length - 1]
    }
    state.weather = _nearArr.getLastObj()
    state.isWeather = true
  },
  [T.AJAX_GET_WEATHER_ERROR](state) {
    state.isWeatherError = true
  },
  [T.RESET_ERROR_BOOL](state, bool) {
    state.isWeatherError = bool
  },
  [T.GET_USER_SENSITIVITY_DATA](state, val) {
    const _temp = state.userInfo.temperature
    for (let i = 0; i < _temp.length; i++) {
      if (_temp[i].value === val) {
        _temp[i].isSelect = true
      }
      if (_temp[i].value !== val) {
        _temp[i].isSelect = false
      }
    }
  },
  [T.POST_USER_SENSITIVITY_DATA](state, val) {
    const _temp = state.userInfo.temperature
    for (let i = 0; i < _temp.length; i++) {
      if (_temp[i].value === val) {
        _temp[i].isSelect = true
      }
      if (_temp[i].value !== val) {
        _temp[i].isSelect = false
      }
    }
  },
  [T.RESET_LOCAL_DATA](state) {
    state.isWeather = false
    state.isWeatherError = false
  }
}
