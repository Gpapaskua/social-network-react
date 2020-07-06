import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <div className="card">
        <img
          src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2019/03/avatar-publicity_still-h_2019.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{props.message}</p>
          <span className={s.likes}>
            <i className="fas fa-thumbs-up"></i> {props.likesCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
