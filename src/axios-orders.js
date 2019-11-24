import axios from 'axios'

const instance = axios.create({
    baseURL: "https://burgerbuilder-d55ec.firebaseio.com/"
})

export default instance