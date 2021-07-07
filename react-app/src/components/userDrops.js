import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadAllBookings,editBooking,deleteBooking } from '../store/bookings';
import {loadAllLodgings} from '../store/lodgings';
import { loadPopDest } from "../store/destinations";
import {loadAllActivities} from '../store/activities';
import DatePicker from "react-datepicker";
import './userDrops.css'


export default function UserDrops(){
    const {id}=useParams()
    const dispatch=useDispatch()
    const [newStartDate, setNewStartDate] = useState(new Date("3045-01-09"));
    const [newEndDate, setNewEndDate] = useState(new Date("3045-01-10"));
    const [newLodging,setNewLodging]=useState(null)
    const [newActivities,setNewActivities]=useState([])
    const [currentEdit, setCurrentEdit]= useState(null)
    const allBookings=useSelector(state=>Object.values(state.bookings))
    const allLodgings=useSelector(state=>Object.values(state.lodgings))
    const allDestinations=useSelector(state=>Object.values(state.destinations))
    const allActivities=useSelector(state=>Object.values(state.activities))
    const [newDestination,setNewDestination]=useState(null)

    const userBookings=allBookings.filter(booking=>{
        return booking.user_id===Number(id)
    })
    
    useEffect(()=>{
        dispatch(loadAllBookings());
        dispatch(loadAllLodgings());
        dispatch(loadPopDest());
        dispatch(loadAllActivities());
    },[dispatch])
    
    const getSpecificLodgings=(dest)=>{
        const destinationId=allDestinations.filter(destination=>{
            if(destination.name==dest){
                return destination.id
            }
        })
       
        const destinationLodgings=allLodgings.filter(lodging=>{
            if(lodging.destination_id===destinationId[0]?.id){
                return lodging
            }
        })
        return destinationLodgings
    }
    
    const getSpecificActivities=(dest)=>{
        const destinationId = allDestinations.filter((destination) => {
          if (destination.name == dest) {
            return destination.id;
          }
        });

        const destinationActivities=allActivities.filter(activity=>{
            if(activity.destination_id===destinationId[0]?.id){
                return activity
            }
        })
        return destinationActivities
    }

    const updateNewActivities=(activityname)=>{
        
        if(newActivities.includes(activityname)){
            setNewActivities(currentArray=>{
                const newArray=currentArray.filter(activity=>activity!==activityname)
                return newArray
            })
        }
        else{
            setNewActivities(currentArray=>[...currentArray,activityname])
        }
    }

    const processDate = (unformatedDate) => {
      return `${unformatedDate.getFullYear()}-${
        unformatedDate.getMonth() + 1
      }-${unformatedDate.getDate()}`;
    };

    const submitEdit=async(e)=>{
      e.preventDefault()
      const bookingId=(Number(currentEdit))
      const user_id=(Number(id))
      const destination=(newDestination)
      const lodging=(newLodging)
      const activities=(newActivities.join(','))
      const start_date=(processDate(newStartDate));
      const end_date=(processDate(newEndDate));

      await dispatch(editBooking(bookingId,user_id,destination,lodging,activities,start_date,end_date))
      setCurrentEdit(null)
    }
    

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
                value={booking}
                onClick={(e) => {
                  setCurrentEdit(booking.id);
                  setNewDestination(booking.destination);
                  setNewLodging(booking.lodging)
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
            {Number(currentEdit) === booking.id && (
              <div className="eachBookingEditDiv">
                <div>
                  <p className="editDivDestination">{booking.destination}</p>
                  <div className="editStartDateDiv">
                    <p>Select New Drop Date</p>
                    <DatePicker
                      className="newDropDate"
                      selected={newStartDate}
                      onSelect={(date) => {
                        setNewStartDate(date);
                      }}
                    />
                  </div>
                  <div>
                    <p className="editEndDateDiv">
                      <p>Select New Extraction Date</p>
                      <DatePicker
                        className="newExtractionDate"
                        selected={newEndDate}
                        onSelect={(date) => {
                          setNewEndDate(date);
                        }}
                      />
                    </p>
                  </div>
                  <div className="editDivLodging">
                    <p>Lodgings</p>
                    {getSpecificLodgings(booking.destination).map((lodging) => (
                      <div className="editLodgingCheckboxEach">
                        <input
                          type="radio"
                          onChange={(e) => {
                            setNewLodging(e.target.value);
                          }}
                          name="lodgingRadio"
                          value={lodging.name}
                        />
                        <label for={lodging.name}>{lodging.name}</label>
                      </div>
                    ))}
                  </div>
                  <div className="editDivActivities">
                    <p>Activities</p>
                    {getSpecificActivities(booking.destination).map(
                      (activity) => (
                        <div className="editActivityCheckboxEach">
                          <input
                            type="checkbox"
                            onChange={(e) => {
                              updateNewActivities(e.target.value);
                            }}
                            value={activity.name}
                            name={activity.name}
                          />
                          <label for={activity.name}>{activity.name}</label>
                        </div>
                      )
                    )}
                  </div>
                  <button onClick={submitEdit}>Confirm Edit</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
}










