import axios from "axios";

// type responseType = {}
export const getUsers = (page: number = 0, perPage: number = 20) => axios.get<any>(`https://new-backend.unistory.app/api/data?page=${page}&perPage=${perPage}`).then(response => response.data)
