import AXIOS from "./axiosClient";

const url = 'user/'

export const findUserByNameAPI = async (params) => {
    try {
        const res = await AXIOS.get(`${url}name=${params}`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}


export const getProfileUserByIDAPI = async (params) => {
    try {
        const res = await AXIOS.get(`${url}${params}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}