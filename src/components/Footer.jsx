import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-2 md:py-4 mt-10 md:mt-16"> {/* Adjusted padding and margin for responsiveness */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-2 md:mb-0">
                        <p className="text-xs md:text-sm">&copy; 2024 Lockin Pvt Ltd. All rights reserved.</p>
                    </div>
                    <div className="text-xs md:text-sm">
                        <p>Contact Us:</p>
                        <p>Email: info@lockincompany.com</p>
                        <p>Phone: +9134567890</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
