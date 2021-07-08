
const LOAD_BOOKINGS='bookings/LOAD_BOOKINGS'


const loadBookings=(bookings)=>({
    type:LOAD_BOOKINGS,
    bookings:bookings
})


export const loadAllBookings=()=>async(dispatch)=>{
    const res=await fetch('/api/bookings/load')

    if(res.ok){
        const data=await res.json()
        dispatch(loadBookings(data))
    }
}

export const editBooking =(id, user_id, destination, lodging, activities, start_date, end_date) =>async (dispatch) => {
    const res = await fetch(`/api/bookings/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id,
        destination,
        lodging,
        activities,
        start_date,
        end_date,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(loadBookings(data));
    }
  };

export const deleteBooking=(id)=>async(dispatch)=>{
    const res=await fetch(`/api/bookings/delete/${id}`,{
        method:'DELETE',
        headers: { "Content-Type": "application/json" },
    })
    if(res.ok){
        const data=await res.json()
        dispatch(loadBookings(data))
    }
}

export const postABooking=(user_id,destination,lodging,activities,start_date,end_date)=>async(dispatch)=>{
    
    const res = await fetch("/api/bookings/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
          user_id,
          destination,
          lodging,
          activities,
          start_date,
          end_date
      })
    });
    if(res.ok){
        const data= await res.json();
        dispatch(loadBookings(data))
    }
}

export default function bookingsReducer(state={},action){
    let newState={}
    switch(action.type){
        case LOAD_BOOKINGS:
            action.bookings.bookings.forEach(booking=>{
                newState[booking.id]=booking
            })
            return newState
        default:
            return state
    }
}