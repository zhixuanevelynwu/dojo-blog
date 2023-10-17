import React from "react";
import { Link } from "react-router-dom";

// set up json server: npx json-server --watch data/db.json --port 8000
// http://localhost:8000/blogs
const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
