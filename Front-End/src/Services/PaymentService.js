import axios from 'axios';

class PaymentService{
    getAllPayment(){
        return axios.get('/payments');
    }
}
export default new PaymentService();