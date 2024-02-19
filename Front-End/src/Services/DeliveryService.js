import axios from 'axios';

class DeliveryService{
    getAllDelivery(){
        return axios.get('/delivery');
    }

    getDeliveryByUser(id){
        return axios .get('/delivery')
    }
}
export default new DeliveryService();