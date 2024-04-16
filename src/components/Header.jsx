import React from 'react';

const Header = () => {

    const handleClick = ()=> {
        window.open("https://wa.me/8630845133", '_blank');
    }

    return (
        <div className="bg-slate-200 shadow-md mb-5 sticky top-0"> 
            <div className="container xs:px-4 xs:py-1 md:py-6 flex md:flex-row xs:flex-row justify-between items-center">
                <h1 className="font-bold text-2xl mt-1 md:text-3xl mb-2 ml-4 md:mb-0">LOCKIN</h1>
                <button onClick={handleClick} className="text-white flex items-center lg:px-8 lg:py-3 absolute right-5 lg:text-base md:px-8 md:py-3 bg-slate-800 rounded-lg shadow-lg md:mt-0 xs:py-1 xs:text-xs xs:px-3"><img className='lg:w-5 md:w-4 mr-2 xs:w-3' src="whatsapp.svg" alt="" /> Talk To Us</button>
            </div>
        </div>
    );
}

export default Header;
