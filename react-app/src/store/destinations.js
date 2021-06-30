const GET_POPULAR_DEST='destinations/GET_POPULAR_DEST'





const getPopDest = (dests)=>({
    type:GET_POPULAR_DEST,
    dests:dests
})






export const loadPopDest=()=>async (dispatch)=>{
    const res= await fetch('/api/destinations/')

    if (res.ok){
        const data=await res.json()
        
        dispatch(getPopDest(data))
    }
}




export default function destinationReducer(state={}, action){
    let newState={}
    switch(action.type){
        case GET_POPULAR_DEST:
            action.dests.destinations.forEach(dest=>{
                newState[dest.id]=dest
            })
            return newState
        default:
            return state;
    }
}
    









