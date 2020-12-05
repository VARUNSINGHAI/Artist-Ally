import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeIcon from '@material-ui/icons/Home';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Avatar , IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import CreateIcon from '@material-ui/icons/Create';
import { useStateValue } from "./StateProvider";

function Header() {
    const[{user},dispatch]=useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://urbanjungle.ca/wp-content/uploads/2014/01/letter-a-logo-uppercase.jpg" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search Artist Ally..." type="text"/>
                </div>
                
            </div>

            <div className="header__middle">
                <div className="header__options
                header__options--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <AccountTreeIcon fontSize="large" />
                </div>
                <div className="header__options">
                    <EventAvailableIcon fontSize="large" />
                </div>
            </div>


            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <CreateIcon />
                </IconButton>
        
            </div>
                   

        </div>
    );
    
}

export default Header
