import AXIOS from "./axiosClient";

const url = 'song/'



//export const getListCategorySong = () => {}



export const findSongByIdAPI = ({token, SongId}) => {
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

export const findSongByCategoryAPI = ({token, category}) => {
    try {
        const res = await AXIOS.get(`${url}list/${category}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}


export const likeSongAPI = ({token, data}) => {
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

export const commentSongAPI = ({token, data}) => {
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


export const uploadSongAPI = ({token, formData}) => {
    try {
        const res = await AXIOS.post(`${url}uploadFile`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return res.data;
    } catch (error) {
        return error
    }
}
