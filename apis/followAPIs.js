import AXIOS from "./axiosClient";

const url = 'follow/'


export const getListFollowerAPI = async ({userId, token}) => {
    try {
        const res = await AXIOS.get(`${url}${userId}/following`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }   
}

export const getFollowRequestsAPI = async ({userId, token}) => {
    try {
        const res = await AXIOS.get(`${url}${userId}/request`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }   
}

export const getListFollowingAPI = async ({userId, token}) => {
    try {
        const res = await AXIOS.get(`${url}${userId}/follower`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const postRequestFollowAPI = async ({myUserId, userId, token}) => {
    try {
        const res = await AXIOS.get(`${url}${myUserId}/${userId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return
    }
}


export const confirmRequestFollowAPI = async ({userId, token}) => {
    try {
        const res = await AXIOS.get(`${url}user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return
    }
}

export const refuseRequestFollowAPI = async ({userId, token}) => {
    try {
        const res = await AXIOS.get(`${url}delete/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}
