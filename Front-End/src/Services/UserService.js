import axios from 'axios';

class UserService{
    getAllUser(){
        return axios.get('/users');
    }
}
export default new UserService();