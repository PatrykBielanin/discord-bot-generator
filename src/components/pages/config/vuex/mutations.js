export const saveOption = (state, {label, value}) => {
    state.config[label] = value
}
