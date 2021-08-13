export const saveSimpleCommand = ({ commit }, {payload}) => {
      commit('saveSimpleCommand', {
          type: payload.type,
          name: payload.name,
          response: payload.response
      })
  }

  export const deleteCommand = ({ commit }, {payload}) => {
    commit('deleteCommand', {name: payload.name})
}

