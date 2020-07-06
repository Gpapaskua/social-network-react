import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import { addPost } from "../../redux/state";

const Profile = props => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={addPost} />
    </div>
  );
};

export default Profile;
