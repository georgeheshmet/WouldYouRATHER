export const GET_USERS = "GET_USERS"

export const GetUsers=(users)=>{
    return {
        type: GET_USERS,
        users
    }
}