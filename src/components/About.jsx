import React from 'react';
import { style } from 'glamor';
import 'bootstrap/dist/css/bootstrap.min.css';
function About(){

    let hoverStyle = style({width: "18rem", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor:"#fafafae3",transition: "all ease .5s", ":hover": { cursor: "pointer", backgroundColor: "#e6e5e5", color: "#030303e3" }});
    return (
        <div className='container text-center'>
            <h2 className='text-center mb-4'>About Us</h2>
            <div>
                <p className='text-center'>
                At <strong>Werner Kuehne AG</strong>, we are a family-driven business specializing in the international trade of premium berries and fruits. With strong roots in tradition and a forward-thinking approach, we have earned a reputation for trust, quality, and long-term partnerships.
                Operating primarily between Serbia and Greece, we connect growers with global markets, ensuring fresh, high-quality produce reaches our clients efficiently. Our commitment to excellence, sustainability, and ethical business practices defines our approach, making us a trusted name in the industry.
                </p>


                <h2 className="text-center mt-3">Our Values</h2>
                <div className='d-flex flex-wrap justify-content-center gap-3 mt-4'>
                {[
                    {title:"Family at Heart",text:"Our foundation is built on family values. We foster long-term relationships with our partners, employees, and customers, ensuring trust and mutual growth at every step."},
                    {title:"Quality Without Compromise",text:"We hold ourselves to the highest standards. From sourcing to delivery, we ensure that only the freshest and finest fruits reach our customers."},
                    {title:"Sustainable Growth",text:"Nature is at the core of what we do. We are dedicated to responsible sourcing, minimizing waste, and supporting eco-friendly farming practices."},
                    {title:"Integrity in Every Deal",text:"Honesty and transparency define our business. We honor our commitments, respect our partners, and uphold ethical trade practices across all operations."},
                    {title:"Connecting Markets, Creating Opportunities",text:"By bridging growers and buyers, we create value for both sides. Our deep market expertise and logistics excellence ensure smooth, reliable trade in every transaction."}
                ].map((value,index) => (
                    <div key={index} className='card shadow-lg p-3 text-center' {...hoverStyle}>
                    <h5 className='card-title'>{value.title}</h5>
                    <p className='card-text'>{value.text}</p>
                    </div>
                ))}
                </div>
                
        </div>
        </div>
    );
}

export default About;