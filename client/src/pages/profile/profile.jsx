import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from "../../Actions/authuserActions"
import {logout} from "../../Actions/authuserActions";
import "./profile.scss"

const Profil = () => {
  
  const {user} = useSelector((state) => state.authReducer);
  const id =user?._id 
  console.log("id" , id)
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(logout());
  };



  
 
  const       content = [
    "fullName",
    "email",
    "birthDay",
    "gender",
    "phoneNumber",
    "adress",
    "country",
    "city",
  ];
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
        <Navbar/>    
       <div className="container">
        <Link to="/updateprofile">
        <div className="editButton">Edit</div></Link>
       
        <Link to="/"> <div className="logoutButton" onClick={handleLogin}>Logout</div></Link>
        <h1 className="title"> Informations</h1>
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbtGXPk6L8oz8e9uDTbkPJ1z-Yp3bdHTAYQ&usqp=CAU" alt="" className="itemImg" />
  
          <div className="details">
            
            {content.map((el) => (
              <div className="detailItem">
                <span className="itemKey">{el}:</span>
  
                <span className="itemValue">{user ?.[el]}</span>
              </div>
            ))}
          </div>
        </div>
      
        </div>

    </div>
</div>
  );
};

export default Profil;
