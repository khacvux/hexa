import AXIOS from "./axiosClient";

const url = 'user/'

export const findUserByNameAPI = async (params) => {
    try {
        const res = await AXIOS.get(`${url}find/name=${params}`)
        return res.data;
    } catch (error) {
        return error
    }
}


export const getProfileUserByIDAPI = async ({userId, token}) => {
    try {
        const res = await AXIOS.get(`${url}${userId}`, {
            headers: {
                'Authorization:': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}