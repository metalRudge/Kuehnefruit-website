import React, { createContext } from 'react';
import Navbar from './Navbar';
import  Button  from './Button';
import Footer from './Footer';
import useViewportWidth  from '../hooks/useViewPortWidth';

export const ViewportContext = createContext();

function MainContent() {
    // Use the custom hook to get the viewport width
    const { viewportWidth } = useViewportWidth();

    return (
        // Provide the viewport data to children components via Context
        <ViewportContext.Provider value={{ viewportWidth}}>
            <div>
                <Navbar />
                <h1>Welcome to KUEHNEFRUIT</h1>
                <Button />
            </div>
        </ViewportContext.Provider>
    );
}
export default MainContent;