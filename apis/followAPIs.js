import AXIOS from "./axiosClient";

const url = 'follow/'


export const getListFollowerAPI = async ({token}) => {
    try {
        const res = await AXIOS.get(`${url}follower`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }   
}

export const getFollowRequestsAPI = async ({token}) => {
    try {
        const res = await AXIOS.get(`${url}request`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }   
}

export const getListFollowingAPI = async ({token}) => {
    try {
        const res = await AXIOS.get(`${url}follower`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const postRequestFollowAPI = async ({userIdRecipient, token}) => {
    try {
        const res = await AXIOS.get(`${url}send/${userIdRecipient}`,{
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


export const acceptRequestFollowAPI = async ({followId, token}) => {
    try {
        const res = await AXIOS.get(`${url}accept/${followId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const refuseRequestFollowAPI = async ({followId, token}) => {
    try {
        const res = await AXIOS.get(`${url}delete/${followId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}
