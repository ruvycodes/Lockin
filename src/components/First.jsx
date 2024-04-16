import React, { useEffect, useState } from 'react';
import FirstMobile from './FirstMobile';
import FirstDesktop from './FirstDesktop';

const First = () => {

    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth <= 600); // We can adjust this later if we want
    };

    useEffect(() => {
        
        handleResize(); 

        window.addEventListener('resize', handleResize); 

        return () => window.removeEventListener('resize', handleResize); // Clean up
    }, []);


    return(
        <>{isMobile ? <FirstMobile /> : <FirstDesktop />}</>
    )

}

export default First;
