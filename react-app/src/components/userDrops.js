import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadAllBookings,editBooking,deleteBooking } from '../store/bookings';
import './userDrops.css'


export default function UserDrops(){
    const {id}=useParams()
    const dispatch=useDispatch()
    const allBookings=useSelector(state=>Object.values(state.bookings))
    const userBookings=allBookings.filter(booking=>{
        return booking.user_id===Number(id)
    })
    
    useEffect(()=>{
        dispatch(loadAllBookings())
    },[dispatch])

    // const editBooking=async(e)=>{
        
    //     await dispatch(editBooking(e.target.value))
    // }
    // const deleteBooking=async(e)=>{
        
    //     await dispatch(deleteBooking(e.target.value))
    // }

    return (
      <div className="BookingsContainer">
        {userBookings.map((booking) => (
          <div value={booking.id} className="eachBookingContainer">
            <p>{booking.destination}</p>
            <div>
                <p>Drop Date</p>
                <p>{booking.start_date}</p>
            </div>
            <div>
            <p>ExtractionDate</p>
            <p>{booking.end_date}</p>
            </div>
            <div>
            <p>Selected Lodging</p>
            <p>{booking.lodging}</p>
            </div>
            <div>
            <p>Planned Activities</p>
            <p>{booking.activities}</p>
            </div>
            <button value={booking.id} onClick={e=>{dispatch(editBooking(Number(e.target.value)))}}>Edit</button>
            <button value={booking.id} onClick={e=>{dispatch(deleteBooking(Number(e.target.value)))}}>Delete</button>
          </div>
        ))}
      </div>
    );
}










