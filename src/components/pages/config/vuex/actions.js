export const saveOption = ({ commit }, {payload}) => {
      commit('saveOption', {
          label: payload.label,
          value: payload.value
      })
  }
