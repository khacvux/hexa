import * as TYPES from '../constants/onLoading'

export const onLoadingAuth = payload => {
    return {
        type: TYPES.ON_LOADING_AUTH,
        payload
    }
} 