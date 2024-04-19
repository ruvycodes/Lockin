import React from 'react';

const Features = () => {

    const handleClick = ()=> {
        window.open("https://wa.me/8630845133", '_blank');
    }

    return (
        <div className='lg:mt-36 md:mt-20 xs:mt-12'>
            <div className='flex justify-center flex-col items-center mb-8 md:mb-16'>
                <h1 className='font-semibold text-3xl md:text-5xl text-[rgb(40,48,68)]'>Features</h1>
                <h4 style={{fontWeight: 'bold'}} className='mt-4 md:mt-6 text-lg md:text-xl text-[rgb(40,48,68)]'>Solving for Landlords</h4>
            </div>

            <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
                
                    <div style={{border: '1px solid #1E293B', borderRadius: '8px'}} className='shadow-md w-full md:w-[17rem] h-60 md:h-72 bg-[rgb(245,245,245)] flex justify-center flex-col items-center mb-8 xs:w-[9rem]'>
                        <img className='w-12 md:w-16 -mt-3 md:-mt-5' src="magnifying-glass-location-solid.svg" alt="" />
                        <p className='text-center px-4 md:px-6 font-semibold mt-4 md:mt-6 text-md md:text-lg'>Automated requirement gathering</p>
                    </div>

                    <div style={{border: '1px solid #1E293B', borderRadius: '8px'}} className='shadow-md w-full md:w-[17rem] h-60 md:h-72 bg-[rgb(245,245,245)] flex justify-center flex-col items-center mb-8 xs:w-[9rem]'>
                        <img className='lg:w-9 xs:w-6 -mt-3 md:-mt-5' src="1-solid.svg" alt="" />
                        <p className='text-center px-4 md:px-6 font-semibold mt-4 md:mt-6 text-md md:text-lg'>We handle 1 property at a time</p>
                    </div>

                    <div style={{border: '1px solid #1E293B', borderRadius: '8px'}} className='shadow-md w-full md:w-[17rem] h-60 md:h-72 bg-[rgb(245,245,245)] flex justify-center flex-col items-center mb-8 xs:w-[9rem]'>
                        <img className='w-12 md:w-16 -mt-3 md:-mt-5' src="connectdevelop.svg" alt="" />
                        <p className='text-center px-4 md:px-6 font-semibold mt-4 md:mt-6 text-md md:text-lg'>Strong matching algorithm</p>
                    </div>

                    <div style={{border: '1px solid #1E293B', borderRadius: '8px'}} className='shadow-md w-full md:w-[17rem] h-60 md:h-72 bg-[rgb(245,245,245)] flex justify-center flex-col items-center mb-8 xs:w-[9rem]'>
                        <img className='w-12 md:w-16 -mt-3 md:-mt-5' src="video-solid.svg" alt="" />
                        <p className='text-center px-4 md:px-6 font-semibold mt-4 md:mt-6 text-md md:text-lg'>High quality property shoot</p>
                    </div>

                    <div style={{border: '1px solid #1E293B', borderRadius: '8px'}} className='shadow-md w-full md:w-[17rem] h-60 md:h-72 bg-[rgb(245,245,245)] flex justify-center flex-col items-center mb-8 xs:w-[9rem]'>
                        <img className='w-12 md:w-16 -mt-3 md:-mt-5' src="ranking-star-solid.svg" alt="" />
                        <p className='text-center px-4 md:px-6 font-semibold mt-4 md:mt-6 text-md md:text-lg'>Filtered and quality tenant profiles</p>
                    </div>

                    <div style={{border: '1px solid #1E293B', borderRadius: '8px'}} className='shadow-md w-full md:w-[17rem] h-60 md:h-72 bg-[rgb(245,245,245)] flex justify-center flex-col items-center mb-8 xs:w-[9rem]'>
                        <img className='w-12 md:w-16 -mt-3 md:-mt-5' src="clock-rotate-left-solid.svg" alt="" />
                        <p className='text-center px-4 md:px-6 font-semibold mt-4 md:mt-6 text-md md:text-lg'>Fast deal closure with tenants</p>
                    </div>
            
            </div>
            
            <div className='flex flex-col items-center mt-8 md:mt-12' style={{backgroundColor: '#1E293B', padding: '60px'}}>
                <h1 style={{color: '#EBF5ED'}} className='font-bold text-2xl md:text-4xl text-center text-[rgb(40,48,68)]'>Fixed 7 days brokerage only!</h1>
                <button onClick={handleClick} className="text-[rgb(235,245,238)] px-4 md:px-6 w-36 md:w-52 mx-auto mt-6 md:mt-10 py-3 xs:w-[250px] xs:text-sm md:py-4 bg-[rgb(40,48,68)] rounded-lg shadow-xl" style={{border: '1px solid #EBF5ED', fontWeight: 'bold'}} >Rent out my property</button>
            </div>
        </div>
    );
}

export default Features;
