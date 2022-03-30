import AXIOS from "./axiosClient";

const url = 'user';



export const signInAPI = async (data) => {
    try {
        const res =  await AXIOS.post(`${url}/login`, data);
        return res.data;
    } catch (e) {
        return console.log(e)
    }
}
export const signUpAPI = async (data) => {
    try {
        const res =  await AXIOS.post(`${url}/register`, data);
        return res.data;
    } catch (e) {
        return console.log(e)
    }
}


export const setFollowStatusAPI = async ({userId, token}) => {
    try {
        const res = await AXIOS.get(`follow/${userId}/followStatus`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) { 
        console.log('API: ',error)
    }
}

export const editProfileAPI = async (data) => {
    try {
        return await AXIOS.post(`${url}/changeName`, data)
    } catch (error) {
        console.log('API: ', error)
    }
}