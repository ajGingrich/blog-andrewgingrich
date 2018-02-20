function sidebar(state = { isOpen: true }, action) {
  switch(action.type) {
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {
        ///toggle here..
        sidebar: action.filter
      })
    default:
      return state;
  }
}

export {
  sidebar,
}
