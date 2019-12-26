import axios from 'axios'
export const category=()=> {
    return{
        type: 'FETCH_CATEGORY',
        payload : axios.get('http://localhost:5000/api/v1/category')
    }
}