import AXIOS from "./axiosClient";

const url = 'posts'


export const getPostsAPI = async (data) => {
    try {
        let params = '';
        // data && (params = '')
    } catch (error) {
        
    }
}


export const uploadPostsAPI = async ({token, formData}) => {
    console.log(formData)
    try {
        const res = await AXIOS.post(`${url}/uploadFile`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getListPostsAPI = async ({token, userId}) => {

    try {
        const res = await AXIOS.get(`${url}/listPosts/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}


export const findPostsByIdAPI = async ({token, postsId}) => {
    try {
        const res = await AXIOS.get(`${url}/${postsId}`, {
            headers: {
                'Authorization:': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) {
        console.log('API: ', error)
    }
}