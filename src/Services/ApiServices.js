import axiosClient from '../Axios/axios'

const PaymentService  = {
    initializePayment : async (paymentData, callback = (data)=>{}) => {
        await axiosClient.post('/payments/initialize', paymentData)
            .then(({data})=> {
                callback(data);
            })
    },
}

export default PaymentService;
