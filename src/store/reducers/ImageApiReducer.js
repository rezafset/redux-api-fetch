const initState = {
    apiImage: []
}

const ImageApiReducer = (state = initState, action) => {
    switch(action.type){
        case 'STORE_IMAGE':
            return {apiImage: action.payload}
        default:
            return state;
    }
};

export default ImageApiReducer;