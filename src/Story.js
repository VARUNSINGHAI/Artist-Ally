import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Story.css";
{/*so basically the story reel have three things the image the profile pic and the name */}
{/*Image-image,Profile Pic-profileSrc and Name as title*/}
function Story({image,profileSrc,title}) {
    return (
        <div style={{backgroundImage:`url(${image})`}}className="story">
            <Avatar className="story__avatar" src={profileSrc}/>
            <h4>{title}</h4>
            
        </div>
    );
}

export default Story;
