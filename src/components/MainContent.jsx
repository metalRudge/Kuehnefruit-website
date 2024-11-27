import React, { Component, createContext } from 'react';
import useViewportWidth  from '../hooks/useViewPortWidth'; 
import '../styles/MainContent.css';
import Navbar from './Navbar';
import Button  from './Button';
import Footer from './Footer';
import FlipCard from './Card';

import malina from '../img/malina2.png';
import blueberry1 from '../img/blueberry1.png';
import blueberry2 from '../img/blueberry2.png';
import blackberry from '../img/blackberry.png';
import raspberry from '../img/raspberry.png';

export const ViewportContext = createContext();
const cards = [
    {frontImage:malina,backText:'lorem ipsum'},
    {frontImage:blueberry1,backText:'lorem ipsum'},
    {frontImage:blueberry2,backText:'lorem ipsum'},
    {frontImage:blackberry,backText:'lorem ipsum'},
    {frontImage:raspberry,backText:'lorem ipsum'}
];
function MainContent() {
    // Use the custom hook to get the viewport width
    const { viewportWidth } = useViewportWidth(); 
    
    return (
        // Provide the viewport data to children components via Context
        <ViewportContext.Provider value={{ viewportWidth}}>
            <FlipCard cards={cards}/>
            <Footer/>
        </ViewportContext.Provider>
    );
};
export default MainContent;