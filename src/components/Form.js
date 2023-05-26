import React, { useState } from "react";
import Show from "./Show";

function Form() {
  const [user, setUser] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("React JS");


  function handleSubmit (event) {
    console.log(user);
    console.log(comments);
    console.log(topic);
    alert(`${user}  ${comments} ${topic}`);
    event.preventDefault();
  }

  function onUserChange(event) {
    setUser(event.target.value);
  }

  function onCommentsChange(event) {
    setComments(event.target.value);
  }

  function onTopicChange(event) {
    setTopic(event.target.value);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Username : </label>
          <input type="text" value={user} onChange={onUserChange} />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            cols="30"
            rows="3"
            value={comments}
            onChange={onCommentsChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Topics</label>
          <select value={topic} onChange={onTopicChange}>
            <option value="react">React JS</option>
            <option value="anglar">Angular JS</option>
            <option value="Vue">Vue JS</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>{}</div>
    </div>
  );
}

export default Form;
