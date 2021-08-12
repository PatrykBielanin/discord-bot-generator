export const saveSimpleCommand = ({ commit }, {payload}) => {
      commit('saveSimpleCommand', {
          type: payload.type,
          name: payload.name,
          response: payload.response
      })
  }
