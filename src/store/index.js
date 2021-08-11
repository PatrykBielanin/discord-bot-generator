import Vuex from "vuex";
import commandsModule from "./modules/commands";
import configModule from "./modules/configuration";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      module1: configModule,
      module2: commandsModule
    }
  });
};

export default createStore;
