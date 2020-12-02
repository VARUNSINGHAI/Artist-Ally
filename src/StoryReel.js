import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
              image="https://images.unsplash.com/photo-1548704806-0c20f7ea6474?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              profileSrc="https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              title="Varun Singhai"

            />
            <Story
              image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              profileSrc="https://images.unsplash.com/photo-1588717010980-f8f57f50b38e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
              title="Shubham Singh"

            />
            <Story
              image="https://images.unsplash.com/photo-1553558141-400a8cb11dcf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njh8fGh1bWFuc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              profileSrc="https://images.unsplash.com/photo-1590098440413-b73573388b02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
              title="Anu Malik jr"

            />
            <Story
            image="https://images.unsplash.com/photo-1546250349-ca80220cccd0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGh1bWFuc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            profileSrc="https://images.unsplash.com/photo-1583011536019-c84c4cd7a179?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGh1bWFuc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            title="Neha Sharma"
            />
        </div>
    );
}

export default StoryReel;
