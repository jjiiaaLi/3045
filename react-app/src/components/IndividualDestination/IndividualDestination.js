import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {loadSingleDest} from '../../store/destinations';
import { loadLodgings } from "../../store/lodgings";
import { loadDestinationActivities } from "../../store/activities";
import "./IndividualDestination.css";

export default function IndividualDestination() {
    const {id}=useParams()
    const [lodgingAttributes, setLodgingAttributes]=useState('')
    const dispatch=useDispatch()
    const destination=useSelector(state=>Object.values(state.destinations))
    const lodgings=useSelector(state=>Object.values(state.lodgings))
    const activities=useSelector(state=>Object.values(state.activities))
    

    useEffect(()=>{
        dispatch(loadSingleDest(Number(id)))
        dispatch(loadLodgings(Number(id)))
        dispatch(loadDestinationActivities(Number(id)))
    },[dispatch])

    
    let imageArr
    if(destination.length){
        imageArr=destination[0].images.split(',')
    }
    
    let lodgingAttributeList
    if(lodgingAttributes.length){
      lodgingAttributeList=lodgingAttributes.split(',')
      
    }
    

    return (
      <div className="individualDestContainer">
        {destination.length && (
          <p className="individualDestTitle">{destination[0].name}</p>
        )}
        {destination.length && (
          <div className="individualDestPhotosContainer">
            <img className="individualDestFirstPic" src={imageArr[0]} />
            <div className="individualDestOtherPicsContainer">
              <img className="individualDestOtherPics" src={imageArr[1]} />
              <img className="individualDestOtherPics" src={imageArr[2]} />
              <img className="individualDestOtherPics" src={imageArr[3]} />
              <img className="individualDestOtherPics" src={imageArr[4]} />
            </div>
          </div>
        )}
        <div className="individualDestSummaryDiv">
          <p className="individualDestDividerLine">
            _________________________________________________________________________________________________________________________________________________________
          </p>
          {destination.length && (
            <p className="individualDestSummaryLabel">
              About {destination[0].name}
            </p>
          )}
          {destination.length && (
            <p className="individualDestSummaryContent">
              {destination[0].summary}
            </p>
          )}
        </div>
        <div className="lodgingsDiv">
          <p className="individualDestDividerLine">
            _________________________________________________________________________________________________________________________________________________________
          </p>
          <p className="individualDestSummaryLabel">Available Lodgings</p>
          <div className="lodgingThumbContainer">
            {lodgings.length &&
              lodgings.map((lodging) => (
                <div className="lodgingThumbEach">
                  <img className="eachLodgingImg" src={lodging.image} />
                  <button
                    value={lodging.attributes}
                    className="lodgingSelectBtn"
                    onClick={(e) => {
                      setLodgingAttributes(e.target.value);
                    }}
                  >
                    Explore
                  </button>
                  <p className="lodgingThumbName">{lodging.name}</p>
                </div>
              ))}
          </div>
          {lodgingAttributeList && (
            <ul className="lodgingAttributDisplay">
              <li className="lodgingAttributeItemText">
                {lodgingAttributeList[0]}
              </li>
              <li className="lodgingAttributeItemText">
                {lodgingAttributeList[1]}
              </li>
              <li className="lodgingAttributeItemText">
                {lodgingAttributeList[2]}
              </li>
            </ul>
          )}
          <p className="individualDestDividerLine">
            _________________________________________________________________________________________________________________________________________________________
          </p>
          <p className="individualDestSummaryLabel">Near By Attractions</p>
          <div className="activitiesContainer">
            {activities &&
              activities.map((activity) => (
                <div className="individualActivityContainer">
                  <img className="activityImage" src={activity.image} />
                  <div>
                    <p className="activityName">{activity.name}</p>
                    <p className="activitySummary">{activity.attributes}</p>
                  </div>
                </div>
              ))}
          </div>
          <p className="individualDestDividerLine">
            _________________________________________________________________________________________________________________________________________________________
          </p>
          <p className='reviewLabel'>Reviews</p>
        </div>
      </div>
    );

    
}
