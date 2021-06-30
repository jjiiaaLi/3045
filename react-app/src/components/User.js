import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { loadPopDest } from "../store/destinations";
import './User.css';

function User() {
  const { userId }  = useParams();
  const dispatch = useDispatch();
  const popularDestinations=useSelector(state=>Object.values(state.destinations))
  console.log(popularDestinations)
  
  useEffect(() => {
    dispatch(loadPopDest())
  }, [dispatch]);

  const getFirstImage=(imagesString)=>{
    let imagesArray=imagesString.split(',')
    return imagesArray[0]
  }  

  return (
    <div className="userSplash">
      <div className="userSplashContentDiv">
        <p className="userSplashText">Your Next Adventure Awaits</p>
        <p className="splashDirectionText">
          Scroll down for popular destinations
        </p>
        <button className="suggestionBtn">Search Destinations</button>
      </div>
      <div className="userPopularDestDiv">
        {popularDestinations.map((destination) => (
          <div className='userPopDestContainer'>
            <Link
              className="userPopDestLink"
              to={`/destination/${destination.id}`}
            >
              <img
                className="userPopDestThumbImg"
                src={getFirstImage(destination.images)}
              />
            </Link>
            <p className="userPopDestName">{destination.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default User;
