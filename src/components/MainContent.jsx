import React, { useState,Component, createContext, useEffect } from 'react';
import useViewPortWidth  from '../hooks/useViewPortWidth'; 
import '../styles/MainContent.css';
import Navbar from './Navbar';
import FlipCard from './Card';

import apricots from '../img/apricots.png';
import blueberry1 from '../img/blueberry1.png';
import blackberry from '../img/blackberry.png';
import raspberry from '../img/raspberry.png';

export const ViewportContext = createContext();


function parseProductDescription(cards,setCards){
    fetch('res/product_description.txt')
    .then(res => res.text())
    .then(text => {
        const lines = text.split('\n');
        const updateCards = cards?.map((card,i) => ({
            ...card,
            backText:lines[i]?.replace(/;/g,'\n\n') || "",
        }));
        setCards(updateCards);
    });
}



function MainContent() {
    // Use the custom hook to get the viewport width
    const { viewportWidth } = useViewPortWidth(); 
    const [cards,setCards] = useState([
        {frontImage:apricots,backText:''},
        {frontImage:blueberry1,backText:''},
        {frontImage:blackberry,backText:''},
        {frontImage:raspberry,backText:''},
    ]);
    useEffect(() =>{
        parseProductDescription(cards,setCards)
    },[]);
    return (
        // Provide the viewport data to children components via Context
        <ViewportContext.Provider value={{ viewportWidth}}>
            <div className='test'><FlipCard cards={cards}/></div>
        </ViewportContext.Provider>
    );
};
export default MainContent;