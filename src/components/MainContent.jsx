import React, { Component, createContext } from 'react';
import useViewPortWidth  from '../hooks/useViewPortWidth'; 
import '../styles/MainContent.css';
import Navbar from './Navbar';
import FlipCard from './Card';

import malina from '../img/malina2.png';
import blueberry1 from '../img/blueberry1.png';
import blackberry from '../img/blackberry.png';
import raspberry from '../img/raspberry.png';

export const ViewportContext = createContext();
const cards = [
    {frontImage:malina,backText:'lorem ipsum'},
    {frontImage:blueberry1,backText:'lorem ipsum'},
    {frontImage:blackberry,backText:'lorem ipsum'},
    {frontImage:raspberry,backText:'lorem ipsum'}
];
function MainContent() {
    // Use the custom hook to get the viewport width
    const { viewportWidth } = useViewPortWidth(); 
    
    return (
        // Provide the viewport data to children components via Context
        <ViewportContext.Provider value={{ viewportWidth}}>
            <div className='test'><FlipCard cards={cards}/></div>
        </ViewportContext.Provider>
    );
};
export default MainContent;