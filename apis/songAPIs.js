import AXIOS from "./axiosClient";

const url = 'song/'



//export const getListCategorySong = () => {}



export const findSongByIdAPI = ({token, SongId}) => {
    try {
        const res = await AXIOS.get(`${url}song/${SongId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const findSongByCategoryAPI = ({token, category}) => {
    try {
        const res = await AXIOS.get(`${url}song/list/${category}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}


// export const likeSongAPI = ({token, category}) => {
//     try {
//         const res = await AXIOS.post(`${url}song/like/${category}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         })
//         return res.data
//     } catch (error) {
//         console.log(error)
//     }
// }


export const uploadSongAPI = ({token, formData}) => {
    try {
        const res = await AXIOS.post(`${url}/uploadFile`, formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

