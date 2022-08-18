import { getData } from "../api/api"
const start = (url) => async (dispatch) => {
    try {
        
        const {data} = await getData(url)
        dispatch( {
            type: 'START',
            payload: data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export default start