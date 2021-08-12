export const saveSimpleCommand = (state, {type, name, response}) => {
    state.commands.list.push({
        type,
        name,
        response
    })
}
