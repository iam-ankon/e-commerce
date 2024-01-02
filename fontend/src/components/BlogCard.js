import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">17 nov, 2023</p>
        <h5 className="title">A beautiful sunday morning renaissance </h5>
        <p className="desc">
          Laborum eiusmod amet ipsum eu est occaecat culpa
          irure reprehenderit. Elit Lorem ea ea proident
          aute quis tempor consequat magna non eiusmod sit
          pariatur do. Dolore sint minim adipisicing voluptate.
        </p>
        <Link to="/singleblog" className="button">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
