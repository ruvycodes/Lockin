import React from 'react';

const ComparisionTable = () => {
    const myProductPoints = [
        "Educated and tech powered agents",
        "Cheaper Brokerage",
        "Limited Efforts",
        "100% transparency",
        "Trustworthy and Unbiased"
    ];

    const otherProductPoints = [
        "Inexperienced agents",
        "Higher Brokerage",
        "Requires more efforts",
        "Lack of transparency",
        "Potential bias"
    ];

    return (
        <>
            <h1 className='text-center font-bold lg:text-4xl my-8 md:my-16 lg:my-20 mb-4 md:mb-8 lg:mb-16 pt-28 text-[rgb(40,48,68)] xs:text-xl xs:pt-16'>Why Choose Us?</h1>
            <div className="flex justify-center items-center">
                <div className="max-w-md md:max-w-xl lg:max-w-2xl flex flex-col md:flex-row justify-center items-center lg:-ml-12 md:pr-8 mb-8 md:mb-0 md:border-r xs:border-r xs:max-w-44 xs:-ml-1 xs:mt-6 border-gray-700">
                    <div>
                        <h2 className="text-[rgb(40,48,68)] text-lg md:text-xl lg:text-4xl text-center md:text-center font-semibold mb-6 md:mb-8 lg:mb-10 xs:text-sm">At Lockin</h2>
                        {myProductPoints.map((point, index) => (
                            <div key={index} className="flex items-center mb-2 md:mb-3 lg:mb-4 lg:p-4 xs:p-0">
                                <img className='w-4 md:w-5 h-4 md:h-5 my-1 mr-2 md:mr-3 xs:w-3' src="circle-check-regular.svg" alt="" />
                                <p className="text-xs md:text-base lg:text-xl lg:w-64 xs:w-44 xs:p-0">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-md md:max-w-xl lg:max-w-2xl flex flex-col md:flex-row justify-center items-center md:pl-8 xs:max-w-sm">
                    <div>
                        <h2 className="text-[rgb(40,48,68)] text-lg md:text-xl lg:text-4xl lg:ml-6 font-semibold lg:mb-4 lg:pb-4 lg:mt-[52px] md:mt-[20px] md:pb-1 md:mb-6 text-center md:text-center xs:pb-1 xs:mb-3 xs:-mt-[4px] xs:text-sm">Average Broker</h2>
                        {otherProductPoints.map((point, index) => (
                            <div key={index} className="flex items-center mb-2 md:mb-3 lg:mb-4 lg:px-4 lg:py-5">
                                <img className='w-4 md:w-5 h-4 md:h-5 my-1 mr-2 md:mr-3 xs:w-3 xs:ml-4' src="circle-xmark-regular.svg" alt="" />
                                <p className="text-xs md:text-base lg:text-xl lg:px-1 lg:-m-1 xs:pt-[6px] xs:pb-[6px] ">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComparisionTable;
