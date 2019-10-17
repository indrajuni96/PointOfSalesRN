const initialState = {
    Home: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false
};

const Home = (state = initialState, action) => {
    switch (action.type) {
        case "GET_HOME_PENDING":
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case "GET_HOME_REJECTED":
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case "GET_HOME_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                Home: action.payload.data.data
            };
        default:
            return state;
    }
};

export default Home;