import React from "react";
import "./styles.css";

function PostItem() {
  return (
    <div className="post">
      <header className="post-header">
        <img
          className="avatar"
          width="32"
          height="32"
          src="https://i.pravatar.cc/32"
          alt="Avatar"
        />
        <div className="details">
          <span>John Doe</span>
          <small>08/07/2019 20:39:17</small>
        </div>
      </header>
      <p className="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        doloribus quam obcaecati repellat quia facilis esse. Quae consectetur
        accusamus, alias tempore error molestiae impedit, quam cupiditate
        assumenda voluptatibus sed praesentium.
      </p>
      <div className="post-comments">
        <div className="divider" />
        <div className="comment">
          <img
            className="avatar"
            width="32"
            height="32"
            src="https://i.pravatar.cc/33"
            alt="Avatar"
          />

          <p>
            <span>Sarah Jane</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ipsa aperiam earum quis consequatur blanditiis, ut quisquam iure
            quod voluptatum perferendis nihil accusantium explicabo, delectus
            asperiores facilis, nemo dolorem maxime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
