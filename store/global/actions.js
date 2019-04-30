import axios from 'axios'
import firebase from '@/plugins/firebase'
import { T } from './types'
import { E } from '../env'

export const actions = {
  [T.FIREBASE_GET_PREFECTURE_DATA] ({ commit }) {
    firebase.firestore().collection('prefecture').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          commit(T.FIREBASE_GET_PREFECTURE_DATA, doc.data())
        })
      })
  },
  [T.FIREBASE_GET_CITIES_DATA] ({ commit }) {
    firebase.firestore().collection('cities').get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          commit(T.FIREBASE_GET_CITIES_DATA, doc.data())
        })
      })
  },
  [T.AJAX_GET_TRANSLATE_CITY] ({ commit }, val) {
    axios.get(E.AJAX_GET_TRANSLATE_CITY.replace('{city}', val))
      .then((res) => {
        commit(T.AJAX_GET_TRANSLATE_CITY, res.data.city)
      })
      .catch(error => {
        console.log(error)
      })
  },
  [T.AJAX_GET_WEATHER_DATA] ({ commit, state }) {
    axios.get(E.AJAX_GET_WEATHER_DATA.replace('{city}', state.select.weather).replace('{api}', E.WEATHER_API_KEY))
      .then(res => {
        commit(T.AJAX_GET_WEATHER_DATA, res.data.list)
      })
      .catch(error => {
        console.log(error)
      })
  },
  [T.GET_USER_SENSITIVITY_DATA] ({ commit }) {
    let _sensitivity = localStorage.getItem('sensitivity')
    if (_sensitivity) {
      commit(T.GET_USER_SENSITIVITY_DATA, _sensitivity)
    }
  },
  [T.POST_USER_SENSITIVITY_DATA] ({ commit }, val) {
    localStorage.setItem('sensitivity', val)
    commit(T.POST_USER_SENSITIVITY_DATA, val)
  },
  [T.SET_SELECT_PREFECTURE] ({ commit }, val) {
    commit(T.SET_SELECT_PREFECTURE, val)
  },
  [T.RESET_SELECT_PREFECTURE] ({ commit }) {
    commit(T.RESET_SELECT_PREFECTURE)
  },
  [T.SET_SELECT_CITY] ({ commit }, val) {
    commit(T.SET_SELECT_CITY, val)
  }
}
