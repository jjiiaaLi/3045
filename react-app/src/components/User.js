import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadPopDest } from "../store/destinations";
import './User.css';

function User() {
  const dispatch = useDispatch();
  const popularDestinations=useSelector(state=>Object.values(state.destinations))
  
  
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
       
      </div>
      <div className="userPopularDestDiv">
        {popularDestinations.map((destination) => (
          <div className='userPopDestContainer'>
            <Link
              className="userPopDestLink"
              to={`/destination/${destination.id}`}
            >
              <img
                alt='destination'
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
