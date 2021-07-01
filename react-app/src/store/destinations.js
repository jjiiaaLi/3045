const GET_POPULAR_DEST='destinations/GET_POPULAR_DEST'
const GET_SINGLE_DEST='destinations/GET_SINGLE_DEST'




const getPopDest = (dests)=>({
    type:GET_POPULAR_DEST,
    dests:dests
})

const getSingleDest = (destination)=>({
    type:GET_SINGLE_DEST,
    destination:destination,
})




export const loadPopDest=()=>async (dispatch)=>{
    const res= await fetch('/api/destinations')

    if (res.ok){
        const data=await res.json()
        
        dispatch(getPopDest(data))
    }
}


export const loadSingleDest=(id)=>async(dispatch)=>{
    const res=await fetch(`/api/destinations/${id}`)
    
    if (res.ok){
        const data= await res.json()
        
        dispatch(getSingleDest(data))
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
        case GET_SINGLE_DEST:
            newState[action.destination.id]=action.destination
            return newState
        default:
            return state;
    }
}
    









