import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {loadSingleDest} from '../../store/destinations';
import { loadLodgings } from "../../store/lodgings";
import { loadDestinationActivities } from "../../store/activities";
import { getDestinationReviews, postAReview, editAReview,deleteReview } from "../../store/reviews";
import { grabUsers } from "../../store/users";
import Booking from "../Booking/Booking";
import "./IndividualDestination.css";
import defaultrobo from '../../images/defaultrobo.png';

export default function IndividualDestination() {
    const {id}=useParams()
    const [lodgingAttributes, setLodgingAttributes]=useState('')
    const [reviewContent, setReviewContent]=useState('')
    const [editContent, setEditContent]=useState('')
    const [showEditBox, setShowEditBox]=useState(false)
    const [reviewToEditId,setReviewToEditId]=useState(null)
    const [showBooking, setShowBooking]=useState(false);
    const dispatch=useDispatch()
    const user=useSelector(state=>Object.values(state.session))
    const destination=useSelector(state=>Object.values(state.destinations))
    const lodgings=useSelector(state=>Object.values(state.lodgings))
    const activities=useSelector(state=>Object.values(state.activities))
    const reviews=useSelector(state=>Object.values(state.reviews))
    const users=useSelector(state=>Object.values(state.users))
    
    useEffect(()=>{
        dispatch(loadSingleDest(Number(id)))
        dispatch(loadLodgings(Number(id)))
        dispatch(loadDestinationActivities(Number(id)))
        dispatch(getDestinationReviews(Number(id)))
        dispatch(grabUsers())
    },[dispatch])
    
    const allowNullUserImg=()=>{
      if(!user[0].image){
        return "https://icon-library.com/images/ai-icon/ai-icon-7.jpg";
      }
      else{
        return user[0].image;
      }
    }
    
    let imageArr
    if(destination.length){
        imageArr=destination[0].images.split(',')
    }
    
    let lodgingAttributeList
    if(lodgingAttributes.length){
      lodgingAttributeList=lodgingAttributes.split(',')
    }
    

    const getAuthorName=(user_id)=>{
      return users.map(user=>{
        if(user.id===user_id){
          return user.username
        }
      })
    }

    const getAuthorImg=(user_id)=>{
      let userImg
      users.forEach(user=>{
        if(user.id===user_id){
          userImg= user.image
        }
      })
      if(!userImg){
        
        return "https://icon-library.com/images/ai-icon/ai-icon-7.jpg"
      }
      else{
        return userImg
      }
    }

    const submitReview = async (e) => {
      e.preventDefault();

      await dispatch(
        postAReview(Number(user[0].id), destination[0].id, reviewContent)
      );
      setReviewContent("");
    };
   
    const editReview=async(e)=>{
      e.preventDefault();
      
      await dispatch(
        editAReview(destination[0].id, reviewToEditId, editContent)
      );
      setShowEditBox(false)
    }

    const BookingClick=(e)=>{
      e.preventDefault();
      if(showBooking===true){
        setShowBooking(false)
      }
      else{
        setShowBooking(true)
      }
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
        </div>
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
        <p className="reviewLabel">Reviews</p>
        <div className="reviewFormContainer">
          {user&&<img className="reviewFormUserImg" src={allowNullUserImg()} />}
          <form className="reviewForm" onSubmit={submitReview}>
            <div>
              <textarea
                className="reviewFormTextarea"
                type="text"
                value={reviewContent}
                name="reviewContent"
                onChange={(e) => {
                  setReviewContent(e.target.value);
                }}
              />
              <button className="submitReviewBtn" type="submit">
                Comment
              </button>
            </div>
          </form>
        </div>

        {reviews && (
          <div className="displayReviewsContainer">
            {reviews.map((review) => (
              <div className="eachReviewContainer">
                <div className="eachReviewTopDiv">
                  <img
                    alt='reviewAuthor'
                    className="reviewAuthorImg"
                    src={getAuthorImg(review.user_id)}
                  />
                  <p className="reviewAuthor">
                    {getAuthorName(review.user_id)}
                  </p>
                </div>
                <p className="reviewContent">{review.content}</p>
                {review.user_id === user[0].id && (
                  <div>
                    <button
                      value={review.content}
                      onClick={(e) => {
                        setEditContent(e.target.value);
                        setShowEditBox(true);
                        reviews.forEach((review) => {
                          if (e.target.value === review.content) {
                            setReviewToEditId(review.id);
                          }
                        });
                      }}
                      className="editReviewBtn"
                    >
                      edit my review
                    </button>
                    <button
                      className="deleteThisReview"
                      value={review.id}
                      onClick={(e) => {
                        dispatch(
                          deleteReview(destination[0].id, e.target.value)
                        );
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {showEditBox && (
          <form className="editForm" onSubmit={editReview}>
            <label className="editFormLabel">Edit this review</label>
            <textarea
              className="editTextarea"
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
              placeholder={editContent}
            ></textarea>
            <button className="editFormSubmit" type="submit">
              Submit Edit
            </button>
          </form>
        )}

        <div className="bookingContainer">
          <div>
            <button onClick={BookingClick} className='BookingBtn'>Plan</button>
            {showBooking&&<Booking showBooking={showBooking}/>}
          </div>
        </div>
      </div>
    );
}
