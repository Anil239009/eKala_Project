import axios from 'axios';

class UserService{
    getAllUser(){
        return axios.get('/users');
    }

    addNewUser(user){
        console.log("add new user function => ",user);
        
        return axios.post("/users/add",user);
    }
}
export default new UserService();