import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h2>Your Ultimate<br /> Watch Destination</h2>
          <p>Discover premium timepieces from top brands with exclusive offers.</p>
          <a href="#shop-now" className="cta-button">Shop Now</a>
        </div>
      </header>

      <section id="shop-now" className="featured-watches">
        <h2>Featured Watches</h2>
        <div className="watches-grid">
          <div className="watch-item">
            <img className="watch-image" src="https://images4.alphacoders.com/266/thumb-1920-266738.jpg" alt="Watch 1" />
            <h3>Watch Model 1</h3>
            <p>$299.99</p>
          </div>
          <div className="watch-item">
            <img className="watch-image" src="https://th.bing.com/th/id/OIP.DBWyse3FamfMvoc8WAcTAQHaE7?rs=1&pid=ImgDetMain" alt="Watch 2" />
            <h3>Watch Model 2</h3>
            <p>$399.99</p>
          </div>
          <div className="watch-item">
            <img className="watch-image" src="https://wallpapercave.com/wp/wp1853721.jpg" alt="Watch 3" />
            <h3>Watch Model 3</h3>
            <p>$499.99</p>
          </div>
          <div className="watch-item">
            <img className="watch-image" src="https://static.helioswatchstore.com/media/easyslide/TB-2_1.webp" alt="Watch 4" />
            <h3>Watch Model 4</h3>
            <p>$599.99</p>
          </div>
          <div className="watch-item">
            <img className="watch-image" src="https://assets.wahsoshiok.com/wp-content/uploads/2022/10/casio-collection-duro-mdv-107-1a2vef-218691-278936_860.jpg" alt="Watch 5" />
            <h3>Watch Model 5</h3>
            <p>$699.99</p>
          </div>
          <div className="watch-item">
            <img className="watch-image" src="https://cdn.pixabay.com/photo/2023/04/26/17/59/wrist-watch-7953062_640.jpg" alt="Watch 6" />
            <h3>Watch Model 6</h3>
            <p>$799.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



