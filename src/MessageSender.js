import { Avatar } from '@material-ui/core';
import React from 'react';
import "./MessageSender.css";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="messageSender">
        <div className="messageSender__top">
            <Avatar />
            {/*taking input of post as a form*/}
            <form>

                <input type="text" 
                className="messageSender__input"
                placeholder="Share your feelings"                
                />

                <input 
                placeholder="URL of your media"
                />

                <button onClick={handleSubmit} type="submit">
                    hidden submit
                </button>
            
            </form>
            
        </div>
        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideoCamIcon style={{color:"red"}}/>
                <h3>Go Live!</h3>
            </div>

            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo/Video</h3>
            </div>

            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:"Orange"}}/>
                <h3>Feeling/Activity</h3>
            </div>

        </div>
    </div>
    );
}

export default MessageSender;
