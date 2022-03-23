import AXIOS from "./axiosClient";

const url = 'posts'


export const getPostsAPI = async (data) => {
    try {
        let params = '';
        // data && (params = '')
    } catch (error) {
        
    }
}

export const getUserInfo = async ({userId, token}) => {
    try {
        let params = ''
        userId && (params = `/${userId}`)
        return res = await AXIOS.get(`${url}${params}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    } catch (e) {
        console.log(e)
    }   
}
