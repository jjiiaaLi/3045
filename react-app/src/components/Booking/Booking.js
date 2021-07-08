import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postABooking,loadAllBookings } from '../../store/bookings';
import './Booking.css';
//learned to use the datepicker package by looking up and learning from the documentation
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


export default function Booking(){
    const dispatch=useDispatch();
    const [dropDate,setDropDate]=useState(new Date("3045-01-08"));
    const [extractionDate, setExtractionDate]=useState(new Date('3045-01-09'));
    const [lodging, setLodging]=useState(null);
    const [activitiesToSubmit, setActivitiesToSubmit]=useState([]);
    const [showSelf,setShowSelf]=useState(true);
    const user = useSelector((state) => Object.values(state.session));
    const activities = useSelector((state) => Object.values(state.activities));
    const lodgings = useSelector((state) => Object.values(state.lodgings));
    const destination = useSelector((state) =>Object.values(state.destinations));

    useEffect(()=>{
      dispatch(loadAllBookings())
    },[dispatch])
    
    let selectedLodging='Select Lodging'
    if(lodging){
        selectedLodging=lodging
    }
    
    const updateActivities=(activityName)=>{
        if(activitiesToSubmit.includes(activityName)){
            setActivitiesToSubmit(currentArray=>{
                const newArray=currentArray.filter(activity=>activity!==activityName)
                return newArray
            })
        }
        else{
            setActivitiesToSubmit(currentArray=>[...currentArray,activityName])
        }
        
    };

    const processDate=(unformatedDate)=>{
        return `${unformatedDate.getFullYear()}-${unformatedDate.getMonth()+1}-${unformatedDate.getDate()}`
    }

    const Submit = async(e) => {
        e.preventDefault();
        await dispatch(postABooking(user[0].id,
          destination[0].name,
          lodging,
          activitiesToSubmit.join(','),
          processDate(dropDate),
          processDate(extractionDate)))

        
    };

    return (
      <div className="bookingFormContainer">
        <div className="selectDateContainer">
          <div className="DateSelectContainer">
            <div className="bookingDateLabelContainer">
              <div className="DateSelectLabels">Drop Date</div>
              <div className="DateSelectLabels">Extraction Date</div>
            </div>

            <div className="bookingDatePickerContainer">
              <DatePicker
                className="bookingDateWindows"
                selected={dropDate}
                onSelect={(date) => {
                  setDropDate(date);
                }}
              />
              <DatePicker
                className="bookingDateWindows"
                selected={extractionDate}
                onSelect={(date) => {
                  setExtractionDate(date);
                }}
              />
            </div>
          </div>
        </div>
        <div className="bookingLodgingSelectDiv">
          <button value={lodging} className="selectLodgingBtn">
            {selectedLodging}
          </button>

          <div className="lodgingOptions">
            {lodgings && (
              <div className="lodgingContent">
                {lodgings.map((lodging) => (
                  <button
                    value={lodging.name}
                    onClick={(e) => {
                      setLodging(e.target.value);
                    }}
                    className="lodgingNames"
                  >
                    {lodging.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bookingActivitiesContainer">
          <div className='bookingActivitiesLabel'>Activities</div>
          {activities.map((activity) => (
            <div>
              <input
                type="checkbox"
                id={activity.id}
                value={activity.name}
                onChange={(e) => updateActivities(e.target.value)}
              />
              <label for={activity.id}>{activity.name}</label>
            </div>
          ))}
        </div>
        <button className='scheduleBtn' onClick={Submit}>Schedule Drop</button>
      </div>
    );
}