import { useNavigate } from "react-router-dom";
import "./category-item.styles.scss";

import React from "react";

export default function CategoryItem({ category }) {
  const navigate = useNavigate();
  const onNavigatehandler = () => navigate(route);
  const { title, imageUrl, route } = category;
  return (
    <div className="category-container" onClick={onNavigatehandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
