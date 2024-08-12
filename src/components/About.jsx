// import { useSelector } from "react-redux";
// const About=(props)=>{
//     // console.log(PRODUCTS);
//     // const cart =useSelector((state)=>state.carter.cart);
//     return (
//     <>
//     <h1>About</h1>
//     <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain.

// Watches appeared in the 16th century. During most of its history, the watch was a mechanical device, driven by clockwork, powered by winding a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches.[1][2] In the 1960s the electronic quartz watch was invented, which was powered by a battery and kept time with a vibrating quartz crystal. By the 1980s the quartz watch had taken over most of the market from the mechanical watch. Historically, this is called the quartz revolution (also known as the quartz crisis in Switzerland).[3][4] Developments in the 2010s include smart watches, which are elaborate computer-like electronic devices designed to be worn on a wrist. They generally incorporate timekeeping functions, but these are only a small subset of the smartwatch's facilities.</p>
//     </>
    
//     )
// };

// export default About;

import React from 'react';
import Slider from "react-slick";
import "./Productitem.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = (props) => {
    const brands = [
        { name: "Rolex", img: "https://th.bing.com/th?id=OIP.lU79_XV08DzlRQ2UiJ4zvAAAAA&w=226&h=275&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
        { name: "Omega", img: "https://th.bing.com/th/id/OIP.yva8yekr6Verv9xcWsSdQwHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { name: "Tag Heuer", img: "https://th.bing.com/th/id/OIP.sJHFAorTI3gvtwtD1X1PRwHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { name: "Casio", img: "https://th.bing.com/th/id/OIP.I9Wx_LCrOxrTIpE3RGPFpAHaJ3?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { name: "Seiko", img: "https://th.bing.com/th/id/OIP.wbM7qWsV2f0Odvcl_B7iCQAAAA?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { name: "Tissot", img: "https://th.bing.com/th/id/OIP.Cb-cYdR3YArvoeZhIPCWtgHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { name: "Citizen", img: "https://th.bing.com/th/id/OIP.sxAnT1i_6K9NgkrUzcV9ygAAAA?rs=1&pid=ImgDetMain" },
        { name: "Breitling", img: "https://th.bing.com/th/id/OIP.BMgDF2JtPl4gDVyrHwifhQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { name: "Longines", img: "https://4.bp.blogspot.com/-_6rn9zPrdiI/WwR-838jQfI/AAAAAAAAdtk/d0WsM5rZ-p4bt7QmtlwsEZPc8rAolv9fgCLcBGAs/s1600/Longines-Record-Automatic-Chronometer-in-Rose-Gold-silver-001.jpg" },
        { name: "Panerai", img: "https://th.bing.com/th/id/OIP.yUcFK_e-N8UD1cX_Y0no3QHaJf?w=208&h=268&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <h1>About</h1>
            <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain.</p>
            <h2>Popular Watch Brands</h2>
            <Slider {...settings}>
                {brands.map((brand, index) => (
                    <div key={index} className="brand-slide">
                        <img src={brand.img} alt={brand.name} className="brand-img" />
                        <h3>{brand.name}</h3>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default About;
