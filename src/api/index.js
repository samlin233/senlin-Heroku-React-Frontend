
import fetch from '../utils/fetch'

export const getSurgery = () => {
    return fetch.get("/api/surgery")
}

export const getSurgeryDetail = (params) => {
    return fetch.get("/api/surgery/viewmore/{id}", params)
}

export const getPostDetail = (params) => {
    return fetch.get("/api/find_post/{id}", params)
}
