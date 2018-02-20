function sidebar(state = { isOpen: true }, action) {
  switch(action.type) {
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {
        isOpen: action.isOpen
      })
    default:
      return state;
  }
}

export {
  sidebar,
}
