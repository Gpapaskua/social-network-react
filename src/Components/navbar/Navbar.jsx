import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';


const Nav = () => {
    return (   
      <div className={s.menu}>
     <p><NavLink className={s.menuItem}  to="/profile"><i className="fas fa-user-alt"></i> Profile</NavLink> </p>
     <p><NavLink className={s.menuItem}  to="/dialogs"><i className="fas fa-envelope"></i>  Messages</NavLink></p>
     <p><NavLink className={s.menuItem}  to="/news"><i className="fas fa-newspaper"></i>  News</NavLink></p>
     <p><NavLink className={s.menuItem}  to="/settings"><i className="fas fa-cog"></i>  Settings</NavLink></p>
     <p><NavLink className={s.menuItem}  to="/music"><i className="fas fa-music"></i>  Music</NavLink></p>
     
      </div>

    );
}

export default Nav;