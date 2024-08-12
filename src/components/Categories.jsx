
// src/components/Categories.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.css';

const Categories = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowPrompt(true);
  };

  const handleSelection = (gender) => {
    navigate(`/watches/${selectedCategory}/${gender}`);
  };

  return (
    <div className="categories-page">
      <h2>Categories</h2>
      <div className="category-list">
        <button onClick={() => handleCategoryClick('men')}>Men's Watches</button>
        <button onClick={() => handleCategoryClick('women')}>Women's Watches</button>
      </div>
      {showPrompt && (
        <div className="prompt">
          
          <button onClick={() => handleSelection('men')}>MEN</button>
          <button onClick={() => handleSelection('women')}>WOMEN</button>
        </div>
      )}
    </div>
  );
};

export default Categories;
