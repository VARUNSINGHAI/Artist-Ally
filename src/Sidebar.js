import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
//import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
//import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { ExpandMoreOutlined } from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://images.unsplash.com/photo-1492546662075-aabebf46dee2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            title=" Varun Singhai"
            />               
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ ChatIcon} title="Messenger"/>

            <SidebarRow Icon={VideoCallIcon} title="Videos"/>      
            <SidebarRow Icon={ExpandMoreOutlined} title="More"/>

            
        </div>
    );
}

export default Sidebar;
