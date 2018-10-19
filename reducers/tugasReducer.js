const tugasState = {
    data: [],
    isLoading: true
};

export default (state = tugasState, action) => {
    switch(action.type) {
        case 'FETCH_TASK': 
            return {
                ...state,
                data: action.payload
            }
        case 'SUCCESS_FETCH_TASK': 
            return {
                ...state,
                isLoading: false
            }

            // console.warn(action.payload);
        default: 
            return state;
    }
}