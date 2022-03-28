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
        let params = '';
        token && (params = '/upLoadFile')
        const res = await AXIOS.post(`${url}${params}`, {
            data: formData,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            },
        })
        if(res.data.status == 'ok') {
            return res.data
        }
    } catch (error) {
        console.log(error)
    }
}