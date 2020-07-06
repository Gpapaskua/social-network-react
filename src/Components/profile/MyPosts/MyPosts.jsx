import React from "react";
import s from "./MyPosts.module.css";
import "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsData = props.posts.map(p => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <h3>My Posts</h3>
      <div className={s.addPost}>
        <textarea
          className={s.textArea}
          ref={newPostElement}
          placeholder="Enter Post"
        ></textarea>
        <br />
        <button className="btn btn-success" onClick={addPost}>
          Add Post
        </button>
        <button className="btn btn-danger">Remove Post</button>
      </div>
      <div className={s.posts}>{postsData}</div>
    </div>
  );
};

export default MyPosts;
