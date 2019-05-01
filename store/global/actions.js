import firebase from '@/plugins/firebase'
import { E } from '../env'
import { T } from './types'

export const actions = {
  [T.FIREBASE_GET_PREFECTURE_DATA]({ commit }) {
    firebase
      .firestore()
      .collection('prefecture')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          commit(T.FIREBASE_GET_PREFECTURE_DATA, doc.data())
        })
      })
  },
  [T.FIREBASE_GET_CITIES_DATA]({ commit }) {
    firebase
      .firestore()
      .collection('cities')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          commit(T.FIREBASE_GET_CITIES_DATA, doc.data())
        })
      })
  },
  [T.SET_SELECT_STATE_CITY]({ commit }, val) {
    commit(T.SET_SELECT_STATE_CITY, val)
  },
  [T.AJAX_GET_TRANSLATE_CITY]({ commit }, val) {
    fetch(E.AJAX_GET_TRANSLATE_CITY.replace('{city}', val))
      .then(res => {
        return res.json()
      })
      .then(data => {
        commit(T.AJAX_GET_TRANSLATE_CITY, data.city)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  [T.AJAX_GET_WEATHER_DATA]({ commit, state }) {
    fetch(
      E.AJAX_GET_WEATHER_DATA.replace('{city}', state.select.weather).replace(
        '{api}',
        E.WEATHER_API_KEY
      ),
      { mode: 'cors' }
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        // eslint-disable-next-line no-console
        commit(T.AJAX_GET_WEATHER_DATA, data.list)
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {
        commit(T.AJAX_GET_WEATHER_ERROR)
      })
  },
  [T.RESET_ERROR_BOOL]({ commit }, bool) {
    commit(T.RESET_ERROR_BOOL, bool)
  },
  [T.GET_USER_SENSITIVITY_DATA]({ commit }) {
    const _sensitivity = localStorage.getItem('sensitivity')
    if (_sensitivity) {
      commit(T.GET_USER_SENSITIVITY_DATA, _sensitivity)
    }
  },
  [T.POST_USER_SENSITIVITY_DATA]({ commit }, val) {
    localStorage.setItem('sensitivity', val)
    commit(T.POST_USER_SENSITIVITY_DATA, val)
  },
  [T.SET_SELECT_PREFECTURE]({ commit }, val) {
    commit(T.SET_SELECT_PREFECTURE, val)
  },
  [T.RESET_SELECT_PREFECTURE]({ commit }) {
    commit(T.RESET_SELECT_PREFECTURE)
  },
  [T.SET_SELECT_CITY]({ commit }, val) {
    commit(T.SET_SELECT_CITY, val)
  },
  [T.RESET_LOCAL_DATA]({ commit }) {
    commit(T.RESET_LOCAL_DATA)
  }
}
