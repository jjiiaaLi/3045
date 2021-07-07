
const GET_LODGINGS='lodgings/GET_LODGINGS'

const loadDestinationLodgings=(lodgings)=>({
    type:GET_LODGINGS,
    lodgings:lodgings,
})

export const loadAllLodgings=(id)=>async(dispatch)=>{
    const res= await fetch('/api/lodgings/getAll')

    if (res.ok){
        const data=await res.json()
        dispatch(loadDestinationLodgings(data))
    }
}


export const loadLodgings=(id)=>async(dispatch)=>{
    const res=await fetch(`/api/lodgings/${id}`)

    if(res.ok){
        const data=await res.json()
        
        dispatch(loadDestinationLodgings(data))
    }
}




export default function lodgingReducer(state={},action){
    let newState={}
    switch(action.type){
        case GET_LODGINGS:
            action.lodgings.lodgings.forEach(lodging=>{
                newState[lodging.id]=lodging
            })
            return newState
        default:
            return state
    }
}