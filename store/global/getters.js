export const getters = {
  getInitUserInfo (state) {
    state.userInfo.temperature.map(item => {
      if (item.isSelect) {
        return state.userInfo.temperature
      }
    })
  },
  getPrefecture (state) {
    return state.prefectures
  },
  getCity (state) {
    return state.cities
  },
  getSelectPref (state) {
    return state.select.pref
  },
  getSelectCity (state) {
    return state.select.city
  },
  getUserInfo (state) {
    return state.userInfo.temperature
  }
}
