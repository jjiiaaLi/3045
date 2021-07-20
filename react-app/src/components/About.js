import React from "react";
import "./Footer/Footer.css";

export default function AboutPage(){
    return (
        <div className='aboutDiv'>
            <h3 className='aboutH'>About 3045</h3>
            <p className='aboutP'>This project was built to display the grasp on the technologies useds to create it. The theme of the project is an airbnb clone made for A.I in the 3045. This facilitates them to make bookings and reviews.  The features are built on the backbone that is the destination page.  Each destination (of which there are 6 in total) has it's own option of lodgings ranging from left to right being the most economical to the most extravegant. Each lodging option has a clickable explore button that displays a hidden div that shows the features of that particular lodging.  Below the lodgings there is a list of all the near by attractions unique to each seeded destination.  Each of these activities are well thought out and helps to flesh out the dystopian sci fi universe that I have created along with this project.  Users can click the Plan button to view a drop down menue with all of the options relating to the particular destination they are currently viewing and make a booking which they can then view in the trips tab on the nav bar.  In there users  can edit and delete their bookings.  Back inside the destinations at the very bottom is the review section.  Users can read other reviews, leave their own, edit and delete them.</p>
        </div>
    )
}