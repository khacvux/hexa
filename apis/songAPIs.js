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


export const likeSongAPI = async ({token, tusId, userId}) => {
    try {
        const res = await AXIOS.post(`${url}like`, {
            tusId, 
            userId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const commentSongAPI = async ({token, tusId, userId, comment}) => {
    try {
        const res = await AXIOS.post(`${url}comment`, {
            tusId,
            userId,
            comment,
        }, {
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
        const res = await AXIOS.get(`listSong/user/${uid}`, {
            'Authorization': `Bearer ${token}`,
        })
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getPlaylistByLIDAPI = async ({token, lid}) => {
    try {
        const res = await AXIOS.get(`listSong/${lid}`, {
            'Authorization': `Bearer ${token}`,
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const createNewPlaylistAPI = async ({token, userId, name}) => {
    try {
        const res = await AXIOS.post(`listSong/new`, {
            userId: userId,
            name: name
        }, {
            'Authorization': `Bearer ${token}`,
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const addSongToPlaylistAPI = async ({token, songId, libId}) => {
    try {
        const res = await AXIOS.get(`listSong/newItem/${libId}/${songId}`, {
            'Authorization': `Bearer ${token}`,
        })   
        return res.data     
    } catch (error) {
        return error
    }
}

export const removeSongFromPlaylistAPI = async ({token, id}) => {
    try {
        const res = await AXIOS.get(`listSong/deleteItem/${id}`, {
            'Authorization': `Bearer ${token}`,
        })        
        return res.data
    } catch (error) {
        return error
    }
}

export const deletePlaylistAPI = async ({token, libId}) => {
    try {
        const res = await AXIOS.get(`listSong/delete/${libId}`, {
            'Authorization': `Bearer ${token}`,
        })        
        return res.data
    } catch (error) {
        return error
    }
}
 
export const getListPostedSongsOfUserAPI = async ({ token, userId }) => {
    try {
        const res = await AXIOS.get(`song/user/${userId}`, {
            'Authorization': `Bearer ${token}`,
        })        
        return res.data
    } catch (error) {
        return error
    }
}