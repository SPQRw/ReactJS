import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
const UserProfile = ({ users }) => {
  const { id } = useParams();
  const location = useLocation();
  return (
    <div>
      {console.log(users)}
      <Link to="/Login">Back</Link>
      <div>{id}</div>
      {console.log(id)}
      <p>{location.state.name}</p>
      <p>{location.state.surname}</p>
      <p>{location.state.email}</p>
      <p>{location.state.password}</p>
    </div>
  );
};

export default UserProfile;
