import axios from "axios";

export type usersType = {
    id: number,
    username: string,
    email: string,
    address: string

}
type responseType = {

    meta: {
    currentPage: number,
        perPage: number,
        "totalPages": number
},
    items: Array<usersType>
}
export const getUsers = (page: number = 0, perPage: number = 20) => axios.get<responseType>(`https://new-backend.unistory.app/api/data?page=${page}&perPage=${perPage}`).then(response => response.data.items)
