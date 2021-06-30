import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {loadSingleDest} from '../../store/destinations';
import "./IndividualDestination.css";

export default function IndividualDestination() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const destination=useSelector(state=>Object.values(state.destinations))
    
    useEffect(()=>{
        dispatch(loadSingleDest(Number(id)))
    },[dispatch])
    let imageArr
    if(destination.length){
        imageArr=destination[0].images.split(',')
        
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
          <p className="individualDestSummaryLabel">
              Available Lodgings
          </p>
        </div>
      </div>
    );

    
}
