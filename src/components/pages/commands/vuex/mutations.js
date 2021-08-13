export const saveSimpleCommand = (state, {type, name, response}) => {
    state.commands.list.push({
        type,
        name,
        response
    })
}

export const deleteCommand = (state, {name}) => {
    let current = state.commands.list.filter( c => c.name == name )
    console.log(current[0])
    // current[0].splice(-1)
}
