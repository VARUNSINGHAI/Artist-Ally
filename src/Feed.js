import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from "./StoryReel";

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
            profilePic="https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            message="woohhoo"
            timestamp="Few seconds ago"
            username="Varun"
            image="https://images.unsplash.com/photo-1606828368219-df8086d2f9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"

            />
            <Post/>
            <Post/>

            {/*story mode*/}
            {/*Message Sender*/}
            
        </div>
    );
}

export default Feed;
