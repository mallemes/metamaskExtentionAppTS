import axios from "axios";

export type usersType = {
    id: number,
    username: string,
    email: string,
    address: string

}
type getUsersResponseType = {

    meta: {
    currentPage: number,
        perPage: number,
        "totalPages": number
},
    items: Array<usersType>
}

export const getUsers = (page: number = 0, perPage: number = 20) => axios.get<getUsersResponseType>(`https://new-backend.unistory.app/api/data?page=${page}&perPage=${perPage}`).then(response => response.data.items)
export const userProfileAPI = (userId:number) => axios.get<usersType>(`https://new-backend.unistory.app/api/data/id/${userId}`).then(response =>response.data)