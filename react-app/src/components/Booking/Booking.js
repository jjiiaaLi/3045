import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const activities = useSelector((state) => Object.values(state.activities));
    const lodgings = useSelector((state) => Object.values(state.lodgings));
    
    let selectedLodging='Select Lodging'
    if(lodging){
        selectedLodging=lodging
    }
    
    const handleDropSelect=(date)=>{
        setDropDate(date);
    }
    const handleExtractionSelect=(date)=>{
        setExtractionDate(date);
    }
    
    const Submit=(e)=>{
        e.preventDefault();
        console.log(lodging);
        console.log(activitiesToSubmit);
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
   

    return (
      <div>
        <div className="DateSelectContainer">
          <p className="DateSelectLabels">Please Select Your Drop Date</p>
          <DatePicker
            className="dropDate"
            selected={dropDate}
            onSelect={handleDropSelect}
          />
          <p className="DateSelectLabels">Please Select Your Extraction Date</p>
          <DatePicker
            className="extractionDate"
            selected={extractionDate}
            onSelect={handleExtractionSelect}
          />
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
          {activities.map((activity) => (
            <div>
              <input type="checkbox" id={activity.id} value={activity.name} onChange={e=>updateActivities(e.target.value)} />
              <label for={activity.id}>{activity.name}</label>
            </div>
          ))}
        </div>
        <button onClick={Submit}>Confirm</button>
      </div>
    );
}