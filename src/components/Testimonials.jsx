import React from 'react';
import malibu from './malibu.webp';
import vatika from './vatika.jpeg';
import parsvanath from './parsvanath.png';
import owner1 from './owner1.jpeg';
import owner2 from './owner2.jpeg';
import owner3 from './owner3.jpeg';


const Testimonials = () => {
    return (
        <div className="py-20 lg:mx-44">
            <h1 className='text-center font-bold text-4xl my-20 text-[rgb(40,48,68)]'>Happy Landlords</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial Card 1 */}
                    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden" style={{position: 'relative'}}>
                        <div style={{position: 'absolute', top: '8px', left: '16px', backgroundColor: '#1E293B', fontSize: '12px', color: '#EBF5ED', fontWeight: '600', padding: '4px 16px', borderRadius: '8px'}}>Vatika City</div>
                        <img style={{position: 'absolute', bottom: '20px', right: '16px', borderRadius: '50%'}} src={owner1} alt="owner" width="60" height="60" />
                        <img className="w-full h-48 object-cover" src={vatika} alt="Testimonial Image" />
                        <div className="p-6">
                            <p className="text-gray-800 text-lg">"I was renting out my apartment for the first time. Lockin made it so easy to find my perfect tenant just sitting at home.."</p>
                            <div className="mt-4 flex items-center">
                                <div className="ml-2">
                                    <p className="text-gray-700 font-semibold">Nishant Jain</p>
                                    <p className="text-gray-600">Sector 49, Gurgaon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden" style={{position: 'relative'}}>
                        <div style={{position: 'absolute', top: '8px', left: '16px', backgroundColor: '#1E293B', fontSize: '12px', color: '#EBF5ED', fontWeight: '600', padding: '4px 16px', borderRadius: '8px'}}>Malibu Town</div>
                        <img style={{position: 'absolute', bottom: '20px', right: '16px', borderRadius: '50%'}} src={owner2} alt="owner" width="60" height="60" />
                        <img className="w-full h-48 object-cover" src={malibu} alt="Testimonial Image" />
                        <div className="p-6">
                            <p className="text-gray-800 text-lg">"Strong focus on my tenant preferences and showcased the flat to only filtered and detailed profiles. Its amazing."</p>
                            <div className="mt-4 flex items-center">
                                <div className="ml-2">
                                    <p className="text-gray-700 font-semibold">Mayur Tanna</p>
                                    <p className="text-gray-600">Sector 47, Gurugram</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden" style={{position: 'relative'}}>
                        <div style={{position: 'absolute', top: '8px', left: '16px', backgroundColor: '#1E293B', fontSize: '12px', color: '#EBF5ED', fontWeight: '600', padding: '4px 16px', borderRadius: '8px'}}>Parsvanath Greenville</div>
                        <img style={{position: 'absolute', bottom: '20px', right: '16px', borderRadius: '50%'}} src={owner3} alt="owner" width="60" height="60" />
                        <img className="w-full h-48 object-cover" src={parsvanath} alt="Testimonial Image" />
                        <div className="p-6">
                            <p className="text-gray-800 text-lg">"Really smart agents. The entire journey did not feel transactional. Helped me rent out again in just 1 week. "</p>
                            <div className="mt-4 flex items-center">
                                <div className="ml-2">
                                    <p className="text-gray-700 font-semibold">Pooja Gupta</p>
                                    <p className="text-gray-600">Sector 48, Gurgaon</p>
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
