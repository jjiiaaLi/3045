
const GET_USERS='users/GET_USERS';


const getUsers=(users)=>({
    type:GET_USERS,
    users:users
})



export const grabUsers=()=>async(dispatch)=>{
    const res=await fetch('/api/users/')

    if(res.ok){
        const data=await res.json()
        
        dispatch(getUsers(data))
    }
}



export default function UserReducers(state={}, action){
    let newState={}
    switch(action.type){
        case GET_USERS:
            action.users.users.forEach(user=>{
                newState[user.id]=user
            })
            return newState
        default:
            return state
    }
}