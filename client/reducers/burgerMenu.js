export default (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_BURGER_MENU':
      return state.map(burgerMenu =>
        (burgerMenu.id === action.id)
          ? {...burgerMenu, isOpen: !burgerMenu.isOpen}
          : burgerMenu
    default:
      return state
  }
}
