import { DELETE, FETCH, POST, PUT } from "./types";

export const getUsers = () => ({
    type : FETCH
})

export const addUsers = (data) => ({
    type : POST,
    payload : data 
})

export const updateUsers = (data,id) => ({
    type: PUT,
    payload : {data,id}
})

export const deleteUser = (id) => ({
    type : DELETE,
    payload : id
})