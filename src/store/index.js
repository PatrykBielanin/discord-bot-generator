import Vue from "vue";
import Vuex from "vuex";
import { createStore } from 'vuex-extensions'
import config from "../components/pages/config/vuex";
import commands from "../components/pages/commands/vuex";

Vue.use(Vuex)

export default createStore(Vuex.Store, {
    modules: {
      config,
      commands
    }
})

