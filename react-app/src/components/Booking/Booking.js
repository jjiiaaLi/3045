import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//learned to use the datepicker package by looking up and learning from the documentation
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


export default function Booking(){
    const dispatch=useDispatch();
    const [dropDate,setDropDate]=useState(new Date("3045-01-08"));
    const [extractionDate, setExtractionDate]=useState(new Date('3045-01-09'));
    const [lodging, setLodging]=useState(null);
    const lodgings = useSelector((state) => Object.values(state.lodgings));
    
    
    const handleDropSelect=(date)=>{
        setDropDate(date);
    }
    const handleExtractionSelect=(date)=>{
        setExtractionDate(date);
    }
    
    const Submit=(e)=>{
        e.preventDefault();
        console.log(lodging)
    }
    
    return (
      <div>
        <div className='DateSelectContainer'>
            <p className='DateSelectLabels'>Please Select Your Drop Date</p>
            <DatePicker 
                className='dropDate'
                selected={dropDate} 
                onSelect={handleDropSelect}
            />
            <p className='DateSelectLabels'>Please Select Your Extraction Date</p>
            <DatePicker
                className='extractionDate'
                selected={extractionDate}
                onSelect={handleExtractionSelect}
            />
        </div>
        <div className='bookingLodgingSelectDiv'>
            <button value={lodging} className='selectLodgingBtn'>Select Lodging</button>
            {lodgings&&<div className='lodgingContent'>
                {lodgings.map(lodging=>(
                    <button value={lodging.name} onClick={e=>{setLodging(e.target.value)}} className='lodgingNames'>{lodging.name}</button>
                ))}
            </div>}
        </div>
        <h1>activity selection</h1>
        <button onClick={Submit}>Confirm</button>
      </div>
    );
}