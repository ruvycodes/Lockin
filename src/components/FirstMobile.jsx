import legend2 from './legend2.jpeg';

const FirstMobile = ()=> {

    // This will load on android/ios phones
    const handleClick = ()=> {
        window.open("https://wa.me/8630845133", '_blank');
    }

    return (
        <div className="flex mt-10 md:flex-row xs:flex-col items-center lg:justify-center md:justify-between xs:justify-between">
            <div className="mx-4 md:mx-8  md:mt-14 mb-6 md:mb-0 md:w-1/2 md:max-w-xl lg:ml-24 xs:ml-8">
                <h1  style={{textAlign: 'center'}} className="xs:text-3xl xs:ml-0 xs:w-[20rem] md:text-5xl md:w-[18rem] lg:text-7xl lg:w-[26rem] font-light text-[rgb(40,48,68)]">
                    <span className="font-semibold">Get</span> your next <span className="font-semibold">tenant fast</span> and <span className="font-semibold">easy</span>
                </h1>
                <img className="rounded-lg object-cover w-full xs:mt-5 xs:w-[22rem] xs:-ml-2 lg:w-[42rem] md:max-h-[12rem] md:w-[22rem] lg:max-h-[19rem]" src={legend2} alt="" />
            </div>
            <div className=" md:w-1/2 xs:mr-16 lg:mt-16 md:mt-12 md:mr-6">
                <button style={{fontWeight: 'bold'}} onClick={handleClick} className="text-[rgb(235,245,238)] w-full xs:text-[16px] md:text-base xs:py-2 xs:w-[10.5rem] xs:mt-5 xs:ml-16 md:w-auto lg:mt-14 lg:text-base md:mt-8 lg:py-3 md:py-2 lg:px-8 md:px-6 bg-[rgb(40,48,68)] rounded-lg shadow-lg">Get started</button>
            </div>
        </div>
    );
}

export default FirstMobile;