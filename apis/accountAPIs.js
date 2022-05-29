import AXIOS from "./axiosClient";

const url = 'user';



export const signInAPI = async (data) => {
    try {
        const res =  await AXIOS.post(`${url}/login`, data);
        return res.data;
    } catch (error) {
        return error
    }
}


// export const signInAPI = async (payload) => {
//     console.log(payload)
//     try {
//         const res = await AXIOS.post(`/auth/login`, payload)
//         return res
//     } catch (error) {
//         console.log(error)
//     }
// }


export const signUpAPI = async (data) => {
    try {
        const res =  await AXIOS.post(`${url}/register`, data);
        return res.data;
    } catch (error) {
        return error
    }
}


export const setFollowStatusAPI = async ({token}) => {
    try {
        const res = await AXIOS.get(`follow/followStatus`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return res.data
    } catch (error) { 
        return error
    }
}

export const editProfileAPI = async (data) => {
    try {
        return await AXIOS.post(`${url}/changeName`, data)
    } catch (error) {
        return error
    }
}

export const updateAvatarAPI = async ({token, formData}) => {
    try {
        return await AXIOS.post(`${url}/updateAvatar`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            },
        })
    } catch (error) {
        console.log(error)
        return error
    }
}


export const deleteAvatarAPI = async ({token}) => {
    try {
        return await AXIOS.delete(`${url}/deleteAvatar`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
    } catch (error) {
        console.log(error)
        return error
    }
}
