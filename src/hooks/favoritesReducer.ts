// Action for toggling favorites in the reducer
function favoritesReducer<T>(
  state: T[],
  action: { type: "TOGGLE" ; payLoad: T },
) {
    switch (action.type) {
        case "TOGGLE":
            return state.includes(action.payLoad)
            ? state.filter((item) => item !== action.payLoad)
            : [...state , action.payLoad]
    
        default:
            return state;
    }
}

export default favoritesReducer
