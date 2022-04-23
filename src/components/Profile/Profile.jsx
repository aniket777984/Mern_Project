import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {

  return (
        <Fragment>
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src="https://res.cloudinary.com/drujgzuhq/image/upload/v1650366072/Users/Photo_png_latest_1_cukeid.jpg" alt="Aniket" />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>Aniket Kumar Gupta</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>aniket777984@gmail.com</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>23/06/2022</p>
              </div>

              <div>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
  );
};

export default Profile;
