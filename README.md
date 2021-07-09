# 3045
*By Jia H Li - [Visit 3045][https://airbnb3045.herokuapp.com/]

**Table of Contents**
* [3045 at a Glance](#3045-at-a-glance)
* [Technologies Used](#Technologies-Used)
* [Frontend Overview](#Frontend-Overview)
* [Backend Overview](#Backend-Overview)
* [Conclusion](#Conclusion)

## 3045 at a glance
3045 is a fullstack app set in the fictional post apocalyptic 3045 A.D where users(Robotic A.Is) are able to book vacations on 6 fully fleshed out destinations atop their orbiter station.

Users can Choose a destination, explore the lodging options and activities, book their drop and extraction details, edit the bookings or delete them. They can also leave, edit, delete review comments.

##### 3045 at a glance
![ezgif com-gif-maker](https://user-images.githubusercontent.com/77854091/125133388-a9aa9600-e0ba-11eb-9f4e-2fb0208aedd8.gif)


## Technologies Used
The backend uses Flask, SQLAlchemy, Alembic, and Postgres


The frontend uses React, Redux, and JSNode



## Frontend Overview
#### React
The Frontend is a React application.  It uses interconnected components and renders them in simple to understand url paths.  

#### Redux

The redux store is used to store information from the backend.  This allows each react component to have the suffcient information to display what is need to allow the users to see the data required inorder for them to fill out their forms, or edit them.

The stored information is only what is required for that displaying component and nothing more making the application snappy and responsive.

#### Functionality
The two CRUD functions used to display my understanding of fullstack development are the reviews functionality and the vacation booking functionality.

Each functionality allows the users to create, read, update, and delete data.

#### Making a booking
![ezgif com-gif-maker](https://user-images.githubusercontent.com/77854091/125137283-3a847000-e0c1-11eb-9959-8c8aae1ee31f.gif)

#### The Booking a vacation functionality is as follows
```jsx
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
          alert('Success! Go to Trips to view your drops!')
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
```
## Backend Overview
In the backend Flask and SQLAlchemy is used to handle routes.  Alembic and Postgres is used to migrate, seed, and access the database.

I have kept the backend routes relatively simple multiaccessable.  This allows the same queries with small variances to be used by the front end thunk actions which removed the need for state data persistence (only applicable to a small skill demonstration app like this one)

#### Writing a review
![ezgif com-gif-maker](https://user-images.githubusercontent.com/77854091/125137690-0f4e5080-e0c2-11eb-887c-5f5532ce5922.gif)

#### Backend fetch requests for the reviews functionality

```jsx
const GET_DEST_REVIEWS='reviews/GET_DEST_REVIEWS'


const loadDestReviews=(reviews)=>({
    type:GET_DEST_REVIEWS,
    reviews:reviews
})



export const getDestinationReviews=(id)=>async(dispatch)=>{
    const res=await fetch(`/api/reviews/${id}`)
    if(res.ok){
        const data=await res.json()
        dispatch(loadDestReviews(data))
    }
}

export const postAReview=(user_id,destination_id,content)=>async(dispatch)=>{
    
    const res=await fetch(`/api/reviews/postReview`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({user_id,destination_id,content})
    })
    if(res.ok){
        const data=await res.json()
        dispatch(loadDestReviews(data));
    }
}


export const editAReview=(destination_id,review_id,content)=>async(dispatch)=>{

    const res=await fetch('/api/reviews/editAReview',{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({destination_id,review_id,content})
    })
    if(res.ok){
        const data=await res.json()
        dispatch(loadDestReviews(data));
    }
}


export const deleteReview=(destination_id,review_id)=>async(dispatch)=>{
    const res = await fetch(`/api/reviews/delete/${review_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({destination_id})
    });
    if (res.ok) {
      const data = await res.json();
      dispatch(loadDestReviews(data));
    }
}


export default function reviewReducer(state={}, action){
    let newState={}
    switch(action.type){
        case GET_DEST_REVIEWS:
            action.reviews.reviews.forEach(review=>{
                newState[review.id]=review
            })
            return newState
        default:
            return state
    }
}
```

####  Database relations

There are a few one to many relationships to demonstrate the ability to understand database relations.  Things are kept as clean as possible to reduce the chances or errors due to querying through a over connected database structure.  Keeping things clean and easy to understand has always been the underlying objective.  

#### Viewing editing and Deleting Bookings
![ezgif com-gif-maker](https://user-images.githubusercontent.com/77854091/125138218-19bd1a00-e0c3-11eb-9e74-c9e9bf87b410.gif)

## Conclusion

The entire purpose of this project was to:
 Utilize the skills I have learned in the previous 22 weeks of education in App Academy to demonstrate my ability to use frontend and backend technologies to flesh out a fully functioning app with complete functionalities that allow users to CREATE, READ, UPDATE, and DELETE data smoothly and without error.

The app was kept simple and to the point.  A bit of sci fi element was added to keep me motivated through out the project.

I spent the time to fully flesh out the 6 destinations with each place having economical to extravagant lodgings.  Each location has seeded data that has his own back story.  This kept my imagination active and a smile on my face.
I did not want to present a project that represented my 6 months of hard work filled with filler text.  

I did not count all the seeded destinations, each with its' unique lodgings, and activities as a functionality.  I however used them as a backbone to demonstrate my ability to create fully functioning components that allows the users to touch the database flawlessly and intuitively as any real world app would.

In the end I had a lot of fun and pushed my self beyond my preconceived limitations in this humble little skill demonstrator.

If you have any questions please feel free to reach out.

Thank you for reading!

