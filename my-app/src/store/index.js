import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'
import index from '@/api/index'

export default createStore({
  state: {
    token: localStorage.getItem('token') || '' ,
    currentUser: localStorage.getItem('Member_ID') || '',
    currentKiosk: localStorage.getItem('Kiosk_ID') || '',
  },
  getters: {
    isLoggedIn: state => !!state.token,
    currentUser: state => state.currentUser,
    currentKiosk: state => state.currentKiosk,
    authHeader: state => ({ Authorization: `Token ${state.token}`}),
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_CURRENT_USER: (state, Member_ID) => state.currentUser = Member_ID,
    SET_CURRENT_KIOSK: (state, Kiosk_ID) => state.currentKiosk = Kiosk_ID,
  },
  actions: {
    saveToken({ commit }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
    },
    removeToken({ commit }) {
      commit('SET_TOKEN', '')
      localStorage.setItem('token', '')
    },
    fetchCurrentUser({ commit }, Member_ID) {
      commit('SET_CURRENT_USER', Member_ID)
      localStorage.setItem('Member_ID', Member_ID)
    },
    fetchCurrentKiosk({ commit }, Kiosk_ID) {
      commit('SET_CURRENT_USER', Kiosk_ID)
      localStorage.setItem('Kiosk_ID', Kiosk_ID)
    },
    login({ dispatch }, credentials) {
      if (!credentials.Member_ID || !credentials.Password) {
        alert("아이디와 비밀번호를 입력해주세요")
        return
      }
      axios({
        url: index.account.login(),
        method: 'post',
        data: credentials,
      })
      .then(res => {
        dispatch('saveToken', res.data.token || 'success')
        dispatch('fetchCurrentUser', res.data.Member_ID || 'success')
        dispatch('fetchCurrentKiosk', res.data.Kiosk_ID || 'success')
        router.push({ name: 'main' })
      })
      .catch(err => {
        console.log(err)
        alert("아이디와 비밀번호를 확인해주세요")
      })
    },
    // signin({ dispatch }, credentials) {

    // },
  },
  modules: {
  }
})
