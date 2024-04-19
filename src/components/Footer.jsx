import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-2 md:py-4 mt-10 md:mt-16"> {/* Adjusted padding and margin for responsiveness */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-2 md:mb-0">
                        <p style={{fontWeight: '500'}} className="text-xs md:text-sm">&copy; 2024 Lockin Pvt Ltd. All rights reserved</p>
                    </div>
                    <div className="text-xs md:text-sm">
                        {/* <p>Contact Us:</p> */}
                        <p style={{fontSize: '12px'}}>contact@lockin.in</p>
                        <p style={{fontSize: '12px'}}>+91 8630845133</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
