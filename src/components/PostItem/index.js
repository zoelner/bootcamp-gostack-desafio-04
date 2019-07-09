import React from "react";
import "./styles.css";

function PostItem(props) {
  return (
    <div className="post">
      <header className="post-header">
        <img
          className="avatar"
          width="32"
          height="32"
          src={props.author.avatar}
          alt="Avatar"
        />
        <div className="details">
          <span>{props.author.name}</span>
          <small>{props.date}</small>
        </div>
      </header>
      <p className="post-content">{props.content} </p>
      <div className="post-comments">
        <div className="divider" />
        {props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            <img
              className="avatar"
              width="32"
              height="32"
              src={comment.author.avatar}
              alt={comment.author.name}
            />

            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostItem;
