

const GET_ACTIVITIES='attractions/GET_ACTIVITIES'


const loadActivities=(activities)=>({
    type:GET_ACTIVITIES,
    activities:activities
})

export const loadAllActivities=()=>async(dispatch)=>{
    const res=await fetch('/api/activities/getAll')
    if(res.ok){
        const data=await res.json()
        dispatch(loadActivities(data))
    }
}

export const loadDestinationActivities=(id)=>async(dispatch)=>{
    const res=await fetch(`/api/activities/${id}`)
    if(res.ok){
        const data= await res.json()
        
        dispatch(loadActivities(data))
    }
}



export default function activitiesReducer(state={}, action){
    let newState={}
    switch (action.type){
        case GET_ACTIVITIES:
            action.activities.activities.forEach(activity=>{
                newState[activity.id]=activity
            })
            return newState
        default:
            return state;
    }
}