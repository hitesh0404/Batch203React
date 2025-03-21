import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import {UserDataContext} from './Parent'

export default function MyProfile() {
    const userData= useContext(UserDataContext);
    console.log(userData );
  return (
    <div>
      <div class="child-component d-flex justify-content-center">
        <div className="card d-flex justify-content-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-circle "
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <div className="card-body">
            <h4 className="card-title">{userData.firstName}</h4>
            <p className="card-text">{userData.email}</p>
          </div>
          <div class="d-grid gap-2 fs-1 text-bg-success text-center   btn-success ">
            <NavLink type="button" name="" id="" class="" to="/">
              Ok
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
