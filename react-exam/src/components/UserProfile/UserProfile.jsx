import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
const UserProfile = ({ users }) => {
  const { id } = useParams();
  const location = useLocation();
  // console.log(new URLSearchParams(location.search).get("param"));
  return (
    <div>
      <Link to="/Login">Back</Link>
      <div>{id}</div>
      {console.log(id)}
      <p>{location.state.name}</p>
      <p>{location.state.surname}</p>
      <p>{location.state.email}</p>
      <p>{location.state.password}</p>
    </div>
  );
  //   return (
  //     <div>
  //       {users.map((user) => (
  //         <div key={user.id}>
  //           <div
  //             style={{
  //               border: "solid 1px black",
  //               color: "red",
  //               marginBottom: "20px",
  //               padding: "10px",
  //             }}
  //           >
  //             <span>{user.id}</span> <br />
  //             <span>{user.name}</span> <br />
  //             <span>{user.surname}</span> <br />
  //             <span>{user.email}</span> <br />
  //             <span>{user.password}</span>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
};

export default UserProfile;
