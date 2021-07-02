
const GET_DEST_REVIEWS='reviews/GET_DEST_REVIEWS'




const loadDestReviews=(reviews)=>({
    type:GET_DEST_REVIEWS,
    reviews:reviews
})



export const getDestinationReviews=(id)=>async(dispatch)=>{
    const res=await fetch(`/api/reviews/${id}`)
    if(res.ok){
        const data=await res.json()
        dispatch(loadDestReviews(data))
    }
}

export const postAReview=(user_id,destination_id,content)=>async(dispatch)=>{
    
    const res=await fetch(`/api/reviews/postReview`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({user_id,destination_id,content})
    })
    if(res.ok){
        const data=await res.json()
        dispatch(loadDestReviews(data));
    }
}


export const editAReview=(destination_id,review_id,content)=>async(dispatch)=>{

    const res=await fetch('/api/reviews/editAReview',{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({destination_id,review_id,content})
    })
    if(res.ok){
        const data=await res.json()
        dispatch(loadDestReviews(data));
    }
}


export const deleteReview=(destination_id,review_id)=>async(dispatch)=>{
    const res = await fetch(`/api/reviews/delete/${review_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({destination_id})
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(loadDestReviews(data));
    }
}


export default function reviewReducer(state={}, action){
    let newState={}
    switch(action.type){
        case GET_DEST_REVIEWS:
            action.reviews.reviews.forEach(review=>{
                newState[review.id]=review
            })
            return newState
        default:
            return state
    }
}


