// services/ProviderApi.js
import axios from 'axios';

export const fetchProviderApi = async (pageNum, searchdata) => {

    const result1 = await axios.post(`http://localhost:8080/searchList/dormitory?pageNum=${pageNum}`, searchdata)

    // console.log('result1 : ', result1)

    return result1.data
}