import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const WelcomeModule = {
  state: {
    msg: 'Welcome to Your Vue.js App'
  }
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Welcome: WelcomeModule
  }

})

export default store
