import axios from "axios"

const _API_BASE_URL = 'http://localhost:8085/auth/my'

class Users{
    getUsers(){
        return axios.get(_API_BASE_URL)
    }
}

export default new Users()