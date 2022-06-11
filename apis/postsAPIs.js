import AXIOS from "./axiosClient";

const url = 'posts'


export const getPostsAPI = async ({token}) => {
    try {
        const res = await AXIOS.get(`${url}/show`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })  
        // console.log(res)  
        return res 
    } catch (error) {
        // console.log(error)
        return 403;
    }
}

export const getPostsByPagingNumberAPI = async ({token, number}) => {
    // console.log(number)
    try {
        const res = await AXIOS.get(`${url}/show/${number}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })    
        // console.log(res.data)
        return res 
    } catch (error) {
        console.log(error)
        return 403;
    }
}

export const reactPostAPI = async ({token, tusId}) => {
    try {
        const res = await AXIOS.get(`${url}/like/${tusId}`, {
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
    try {
        const res = await AXIOS.post(`${url}/new`, formData, {
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

export const getListPostsAPI = async ({token}) => {
    try {
        const res = await AXIOS.get(`${url}/myPosts`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        return error;
    }
}

export const getListPostsByUIDAPI = async ({uid, token}) => {
    try {
        const res = await AXIOS.get(`${url}/user/${uid}`, {
            headers: {
                'Authorization:': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) {
        return error
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

    console.log(data)
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