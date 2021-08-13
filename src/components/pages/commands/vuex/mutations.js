export const saveSimpleCommand = (state, {type, name, response}) => {
    state.commands.list.push({
        type,
        name,
        response
    })
}

export const deleteCommand = (state, {name}) => {
    let command = state.commands.list.indexOf(toString(name))
    console.log(command)
    state.commands.list.splice(command[0], 1)
}
