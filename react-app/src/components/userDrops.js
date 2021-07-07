import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadAllBookings,editBooking,deleteBooking } from '../store/bookings';
import EditBooking from './EditBooking/EditBooking';
import './userDrops.css'


export default function UserDrops(){
    const {id}=useParams()
    const dispatch=useDispatch()
    const [currentEdit, setCurrentEdit]= useState(null)
    const allBookings=useSelector(state=>Object.values(state.bookings))
    const userBookings=allBookings.filter(booking=>{
        return booking.user_id===Number(id)
    })
    
    useEffect(()=>{
        dispatch(loadAllBookings())
    },[dispatch])

    

    return (
      <div className="BookingsContainer">
        {userBookings.map((booking) => (
          <div value={booking.id}>
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
                <ul>
                  {booking.activities.split(",").map((activity) => (
                    <li>{activity}</li>
                  ))}
                </ul>
              </div>
              <button
                value={booking.id}
                onClick={(e) => {
                  dispatch(editBooking(Number(e.target.value)));
                  setCurrentEdit(e.target.value)
                }}
              >
                Edit
              </button>
              <button
                value={booking.id}
                onClick={(e) => {
                  dispatch(deleteBooking(Number(e.target.value)));
                }}
              >
                Delete
              </button>
            </div>
            {}
            <EditBooking/>
          </div>
        ))}
      </div>
    );
}










