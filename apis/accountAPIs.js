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

export const getUserInfo = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `/posts/${userId}`)
        return res = await AXIOS.get(`${url}${params}`, {
            headers: {
                Authorization: token
            }
        })
    } catch (e) {
        console.log(e)
    }   
}

export const getFollowRequests = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `/posts/${userId}/request`)
        return res = await AXIOS.get(`${url}${params}`, {
            headers: {
                Authorization: token
            }
        })
    } catch (e) {
        console.log(e)
    }   
}