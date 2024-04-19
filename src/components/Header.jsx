import React from 'react';
import logo from './logo.png';
import logo1 from './logo1.png';
import whatsapp from './whatsapp.png';

const Header = () => {

    const handleClick = ()=> {
        window.open("https://wa.me/8630845133", '_blank');
    }

    return (
        <div style={{backgroundColor: '#1E293B', zIndex: '1000'}} className="bg-slate-200 shadow-md mb-5 sticky top-0"> 
            <div className="container xs:px-4 xs:py-1 md:py-4 flex md:flex-row xs:flex-row justify-between items-center">
                <img src={logo1} style={{padding: '12px'}} alt="logo" width="140px" height="auto" />
                <button style={{backgroundColor: '#EBF5ED', color: '#1E293B', fontWeight: 'bold'}} onClick={handleClick} className="text-white flex items-center lg:px-8 lg:py-3 absolute right-10 lg:text-base md:px-8 md:py-3 bg-slate-800 rounded-lg shadow-lg md:mt-0 xs:py-1 xs:text-xs xs:px-3"><img style={{color: '#1E293B'}} className='lg:w-8 md:w-4 mr-2 xs:w-5' src={whatsapp} alt="" /> Talk To Us</button>
            </div>
        </div>
    );
}

export default Header;
