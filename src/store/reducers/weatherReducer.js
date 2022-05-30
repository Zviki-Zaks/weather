
const initialState = {
    weathers: null,
    weather: null,
    filterBy: null,
    isPopup: false,
}

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WEATHERS':
            return { ...state, weathers: action.weathers }

        case 'SET_WEATHER':
            return { ...state, weather: action.weather }

        case 'ADD_WEATHER':
            return { ...state, weathers: [...state.weathers, action.weather] }

        case 'UPDATE_WEATHER':
            return { ...state, weathers: state.weathers.map(weather => weather._id === action.weather._id ? action.weather : weather) }

        case 'REMOVE_WEATHER':
            return { ...state, weathers: state.weathers.filter(weather => weather._id !== action.weatherId) }

        case 'SET_FILTER_BY':
            return { ...state, filterBy: action.filterBy }

        case 'TOGGLE_IS_POPUP':
            return { ...state, isPopup: !state.isPopup }

        default:
            return state
    }
}
