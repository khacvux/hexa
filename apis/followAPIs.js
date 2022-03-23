import AXIOS from "./axiosClient";

const url = 'follow/'



export const getFollowRequests = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `${userId}/request`)
        return res = await AXIOS.get(`${url}${params}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (e) {
        console.log(e)
    }   
}

export const getListFollower = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `/${userId}/following`)
        return res = await AXIOS.get(`${url}${params}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (e) {
        console.log(e)
    }   
}

export const getListFollowing = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `${userId}/follower`)
        return res = await AXIOS.get(`${url}/${params}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}