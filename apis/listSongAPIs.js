import AXIOS from "./axiosClient";

const url = 'listSong/'


export const createPlaylistAPI = ({token, data}) => {
    try {
       const res = await AXIOS.post(`${url}new`, data, {
           headers: {
            'Authorization': `Bearer ${token}`,
           }
       }) 
       return res.data
    } catch (error) {
        return error
    }
}


export const deletePlaylistAPI = ({token, playlistId}) => {
    try {
       const res = await AXIOS.get(`${url}delete/${playlistId}`, {
           headers: {
            'Authorization': `Bearer ${token}`,
           }
       }) 
       return res.data
    } catch (error) {
        return error
    }
}


export const newListItemAPI = ({token, playlistId, songId}) => {
    try {
        const res = await AXIOS.get(`${url}newItem/${playlistId}/${songId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
               }
        })      
        return res.data
    } catch (error) {
        return error
    }
}


// export const deleteListItemAPI = ({token, playlistId, songId}) => {
//     try {
//         const res = await AXIOS.get(`${url}deleteItem/${playlistId}/${songId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                }
//         })      
//         return res.data
//     } catch (error) {
//         return error
//     }
// }


export const findListSongByIdAPI = ({token, playlistId}) => {
    try {
        const res = await AXIOS.get(`${url}/${playlistId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
               }
        })    
        return res.data    
    } catch (error) {
        return error
    }
}

export const findListByUserAPI = ({token, userId}) => {
    try {
        const res = await AXIOS.get(`${url}/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
               }
        })    
        return res.data    
    } catch (error) {
        return error
    }
}