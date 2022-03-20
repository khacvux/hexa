import { AXIOS } from "./axiosClient";
const url = 'user';


export const signInAPI = async (data) => {
    try {
        let params = '';
        data && (params = '/login')
        console.log(data)
        const res =  await AXIOS.post(`${url}${params}`, data);
        return res.data;
    } catch (e) {
        return console.log(e)
    }
}