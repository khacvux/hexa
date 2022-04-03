import AXIOS from "./axiosClient";

const url = 'posts'


export const getPostsAPI = async ({token, userId}) => {
    try {
        const res = await AXIOS.get(`${url}/myUserId/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })    
        return res.data  
    } catch (error) {
        console.log(error)
        return error
    }
}

export const likePostAPI = async ({token, data}) => {
    try {
        const res = await AXIOS.post(`${url}/like`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })   
        return res.data    
    } catch (error) {
        return error
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
        return error;
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
        return error;
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
        return error;
    }
}

export const deletePostByIdAPI = async ({token, postsId}) => {
    try {
        const res = await AXIOS.delete(`${url}/${postsId}`, {
            headers: {
                'Authorization:': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) {
        return error;
    }
}

export const getCommentsOfPostAPI = async ({token, postsId}) => {
    try {
        const res = await AXIOS.get(`${url}/listComment/${postsId}`, {
            headers: {
                'Authorization:': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) {
        return error;
    }
}


export const commentPostAPI = async ({token, data}) => {
    try {
        const res = await AXIOS.post(`${url}/comment`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) {
        return error;
    }
}

export const deleteCommmentAPI = async ({token, commentId}) => {
    try {
        const res = await AXIOS.get(`${url}/comment/${commentId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })     
        return res.data   
    } catch (error) {
        console.log(error)
        return error;
    }
}