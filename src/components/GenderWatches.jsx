// src/components/GenderWatches.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './categories.css'; // Add CSS file for styling

const GenderWatches = () => {
  const { gender } = useParams();

  // Sample data for watches
  const watchesData = {
    men: [
      {
        id: 1,
        name: "Rolex Submariner",
        price: "$8,550",
        image: "https://th.bing.com/th/id/OIP.ozNbvFuK1FwAAuwhUtNiewHaFO?w=280&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Classic diver's watch with ceramic bezel and automatic movement.",
      },
      {
        id: 2,
        name: "Omega Seamaster",
        price: "$6,350",
        image: "https://th.bing.com/th/id/OIP.fWcXso4dMedIxwAkj7SF9gAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        description: "A robust watch with a high-precision chronometer and helium escape valve.",
      },
      {
        id: 3,
        name: "Tag Heuer Carrera",
        price: "$4,600",
        image: "https://cdn-s3.touchofmodern.com/products/001/607/062/c9a6eb308cbcd69605825bb8ea91ae1d_large.jpg?1567223579",
        description: "Stylish chronograph with automatic movement and date function.",
      },
    ],
    women: [
      {
        id: 1,
        name: "Audemars Piguet",
        price: "$8,550",
        image: "https://th.bing.com/th/id/OIP.27-kwvk-zdq-8-Z9zd1aaQAAAA?rs=1&pid=ImgDetMain",
        description: "Elegant watch with automatic movement and a classic design.",
      },
      {
        id: 2,
        name: "Glashütte Original",
        price: "$6,350",
        image: "https://res.cloudinary.com/dp9dnliwc/image/upload/c_mfit,h_1200,w_1200/f_auto/q_auto/wmmedia/watch_images/large/3934121244.jpg",
        description: "A sophisticated timepiece with a high-precision chronometer.",
      },
      {
        id: 3,
        name: "Vacheron Constantin",
        price: "$4,600",
        image: "https://th.bing.com/th/id/OIP.iuVybJaMEgi8FGziDfiQxADIE3?w=450&h=700&rs=1&pid=ImgDetMain",
        description: "Stylish watch with automatic movement and date function.",
      },
    ],
  };

  const selectedWatches = watchesData[gender] || [];

  return (
    <div className="gender-watches-page">
      <h2>{gender === 'men' ? "Men's Watches" : "Women's Watches"}</h2>
      <div className="watches-grid">
        {selectedWatches.map((watch) => (
          <div key={watch.id} className="watch-item">
            <img className="watch-image" src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.price}</p>
            <p>{watch.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenderWatches;

