import AXIOS from "./axiosClient";

const url = 'song/'



export const getListGenreAPI = async ({token}) => {
    try {
        const res = await AXIOS.get(`${url}categoryList`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}



export const findSongByIdAPI = async ({token, SongId}) => {
    try {
        const res = await AXIOS.get(`${url}${SongId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const getListSongByCategoryIdAPI = async ({token, categoryId}) => {
    try {
        const res = await AXIOS.get(`${url}list/${categoryId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}


export const likeSongAPI = async ({token, data}) => {
    try {
        const res = await AXIOS.post(`${url}like`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const commentSongAPI = async ({token, data}) => {
    try {
        const res = await AXIOS.post(`${url}comment`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}


export const uploadSongAPI = async ({token, formData}) => {
    try {
        const res = await AXIOS.post(`${url}uploadFile`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            }
        })
        return res.data;
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getLibraryByUIDAPI = async ({token, uid}) => {
    try {
        const res = await AXIOS.get()
    } catch (error) {
        console.log(error)
        return error
    }
}