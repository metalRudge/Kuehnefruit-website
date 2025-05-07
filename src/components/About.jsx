import React, { useEffect, useState } from 'react';
import { style } from 'glamor';
import {Button} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

function ParseText(){
    const [text,setText] = useState("");

    useEffect(() => {
        fetch("/res/job_description.txt")
        .then((res) => res.text())
        .then((text) => setText(text));
    },[]);
    return (<p style={{textAlign:"left"}}>
        {text.split('\n').map((line,idx) => (
            <span key={idx}>
                {line}<br />
            </span>
        ))}
    </p>
    );
}




function About(){

    let hoverStyle = style({width: "18rem", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor:"#fafafae3",transition: "all ease .5s", ":hover": { cursor: "pointer", backgroundColor: "#e6e5e5", color: "#030303e3" }});
    return (
        <div className='container text-center'>
            <div>
            <h2 className="text-center mt-3">Wir suchen ab sofort: </h2>
                <details className='job-posting'>
                    <summary className='job-summary' style={{paddingBottom:"1.5rem",paddingTop:"1.5rem",fontWeight:"bold"}}>Kaufmännische/r Mitarbeiter/in 60-80%</summary>    
                    <div className='job-details'>
                        <ParseText></ParseText>
                        <Button variant="contained" color="primary" sx={{maxWidth:'10ch', marginTop:"1.5rem", alignSelf:"left"}} onClick={() => window.location.href = '/contact'}>Apply</Button>
                    </div>
                </details>
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