import AXIOS from "./axiosClient";

const url = 'user';



export const signInAPI = async (data) => {
    try {
        let params = '';
        data && (params = '/login')
        // console.log(data)
        const res =  await AXIOS.post(`${url}${params}`, data);
        return res.data;
    } catch (e) {
        return console.log(e)
    }
}
export const signUpAPI = async (data) => {
    try {
        let params = '';
        data && (params = '/register')
        // console.log(data)
        const res =  await AXIOS.post(`${url}${params}`, data);
        return res.data;
    } catch (e) {
        return console.log(e)
    }
}



export const setFollowStatusAPI = async ({userId, token}) => {
    console.log('in API: ',userId)
    try {
        let params = `follow/${userId}/followStatus`
        const res = await AXIOS.get(`${params}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        if(res)
            return res.data
    } catch (error) { 
        console.log('API: ',error)
    }
}