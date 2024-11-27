import React, { useState,useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import '../styles/Card.css';







const CardItem = ({frontImage,backText}) => {
    const [flipped,setFlipped] = useState(false);
    const [hoverTimeout,setHoverTimeout] = useState(null);
    const [dimensions,setDimensions] = useState({width:100,height:100});
    const imageRef = useRef(null);


    useEffect(() => {
        const img  = imageRef.current;
        if(img){
            img.onload = () =>{
                setDimensions({width:img.naturalWidth,height:img.naturalHeight });
            };
        }
    }, [frontImage]);


    const handleMouseEnter = () => {
        const timeout = setTimeout(()=> {
            setFlipped(true);
        }, 500);
        setHoverTimeout(timeout);
    };

    const HandleMouseLeave= () =>{
        clearTimeout(hoverTimeout);
        setFlipped(false);
    };
    return(
        <div className={`card ${flipped ? 'flipped' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={HandleMouseLeave}
            style={{width:dimensions.width,height:dimensions.height}}
        >
            <div className='card-inner'>
                <div className='card-front'>
                <img ref={imageRef} src={frontImage} alt='Card front' className='card-image'/>
                </div>
                <div className='card-back'>
                    <p>{backText}</p>
                </div>
            </div>
        </div>
    );
};


function FlipCard({ cards })
{
    return (
        <div className='card-container'>
            {cards.map((card,index) => (
                <CardItem key={index} frontImage={card.frontImage} backText={card.backText}/>
            ))}
        </div>
    );
}

export default FlipCard;