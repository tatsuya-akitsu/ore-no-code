export const getters = {
  getPrefecture(state) {
    return state.prefectures
  },
  getCity(state) {
    return state.cities
  },
  getSelectPref(state) {
    return state.select.pref
  },
  getSelectCity(state) {
    return state.select.city
  },
  getUserInfo(state) {
    return state.userInfo.temperature
  },
  getWeatherBool(state) {
    return state.isWeather
  },
  getWeatherLocaleBool(state) {
    return state.isWeatherError
  },
  getResultData(state) {
    const _result = {}
    const city = state.resultCity
    const weather = state.weather
    let _weather = {}
    const temperature = state.userInfo.temperature
    const result = state.results

    // タイトル追加
    _result.city = city
    // ユーザー体感温度追加
    _result.temperature = temperature.filter(item => item.isSelect)[0]
    // 天気情報整形
    _weather = {
      temp_max: Math.floor(weather.main.temp_max),
      temp_min: Math.floor(weather.main.temp_min)
    }
    weather.weather.map(item => {
      _weather.weather = item
    })
    _result.weather = _weather
    // ユーザー体感温度に合わせて温度を調整（結果出力調整用）
    for (let i = 0; i < temperature.length; i++) {
      if (temperature[i].value === 'cold') {
        _result.temp_max = _weather.temp_max - 2
        _result.temp_min = _weather.temp_min - 2
      } else if (temperature[i].value === 'heat') {
        _result.temp_max = _weather.temp_max + 2
        _result.temp_min = _weather.temp_min + 2
      }
    }
    // 画像とテキストの用意
    for (let i = 0; i < result.length; i++) {
      if (
        result[i].temp_min > _result.temp_min ||
        result[i].temp_max < _result.temp_max
      ) {
        _result.result = result[i]
      }
    }
    return _result
  }
}
