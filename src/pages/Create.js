import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [time, setTime] = useState(new Date().toString());
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  // const debounceTitle = useRef(debounceOnChange(500)).current;
  // const debounceBody = useRef(debounceOnChange(500)).current;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTime(new Date().toString());
    const blog = { title, body, author, time };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      setTitle("");
      setBody("");
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          // onChange={(e) => debounceTitle(e, setTitle)}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          // onChange={(e) => debounceBody(e, setBody)}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending ? (
          <button>Add Blog</button>
        ) : (
          <button disabled>Adding Blog...</button>
        )}
      </form>
    </div>
  );
};

export default Create;
