import axios from "axios"
const FetchApi = () => {
    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        // console.log(response.data);
        dispatch({type: 'STORE_IMAGE', payload: response.data})
    }
};

export default FetchApi;