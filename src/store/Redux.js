const reducer = (state, action) => {
    const { type, command } = action
    switch (type) {
        case 'INCREASE': {
            return {
                ...state,
                command: command,
            }
        }
        default:
            return state
    }
}
