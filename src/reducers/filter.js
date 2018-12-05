export default (state = 'all', action) => {
    switch (action.type) {
        case 'setFilter':
            return action.filter
        default:
            return state
    }
}