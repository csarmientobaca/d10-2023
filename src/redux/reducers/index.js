const initialState = {
    city: {
        cityContent: []
    }
}
const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_CITY":
            return {
                ...state,
                city: {
                    ...state.city,
                    cityContent: [action.payload]
                }
            }

        default:
            return state
    }


}

export default mainReducer