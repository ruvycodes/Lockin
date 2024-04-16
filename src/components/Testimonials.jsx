import React from 'react';

const Testimonials = () => {
    return (
        <div className="py-20 lg:mx-44">
            <h1 className='text-center font-bold text-4xl my-20 text-[rgb(40,48,68)]'>Happy Property Owners</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial Card 1 */}
                    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Testimonial Image" />
                        <div className="p-6">
                            <p className="text-gray-800 text-lg">"Renting out my property has never been easier! Thanks to this platform, I found tenants quickly and hassle-free.."</p>
                            <div className="mt-4 flex items-center">
                                <div className="ml-2">
                                    <p className="text-gray-700 font-semibold">Suyash Rastogi</p>
                                    <p className="text-gray-600">Janakpuri, New Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Testimonial Image" />
                        <div className="p-6">
                            <p className="text-gray-800 text-lg">"I cant believe how simple and efficient this platform is. Renting out my property was stress-free and straightforward"</p>
                            <div className="mt-4 flex items-center">
                                <div className="ml-2">
                                    <p className="text-gray-700 font-semibold">Janvi Sharma</p>
                                    <p className="text-gray-600">Sector 52, Gurugram</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/600x400" alt="Testimonial Image" />
                        <div className="p-6">
                            <p className="text-gray-800 text-lg">"If you're a property owner looking to rent out your property quickly and without brokers, look no further. This platform is the solution!"</p>
                            <div className="mt-4 flex items-center">
                                <div className="ml-2">
                                    <p className="text-gray-700 font-semibold">Swalina Singh</p>
                                    <p className="text-gray-600">Saket, New Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
