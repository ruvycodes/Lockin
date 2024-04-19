import legend2 from './legend2.jpeg';

const FirstDesktop = () => {

    //This will load on desktop and ipads
    const handleClick = ()=> {
        window.open("https://wa.me/8630845133", '_blank');
    }

    return (
        <div className="flex mt-10 md:flex-row xs:flex-col items-center lg:justify-center md:justify-between xs:justify-between">
            <div style={{marginLeft: '4rem'}} className="mx-4 md:mx-8 mt-8 md:mt-14 mb-6 md:mb-0 md:w-1/2 md:max-w-xl lg:ml-24 xs:ml-8">
                <h1 className="xs:text-xl xs:w-[20rem] md:text-5xl md:w-[18rem] lg:text-7xl lg:w-[30rem] font-light text-[rgb(40,48,68)]">
                    <span className="font-semibold">Get</span> your next <span className="font-semibold">tenant fast</span> and <span className="font-semibold">easy</span>
                </h1>
                <button onClick={handleClick} className="text-[rgb(235,245,238)] w-full xs:text-[12px] md:text-base xs:py-3 xs:w-[15.75rem] xs:mt-6 xs:ml-1 md:w-auto lg:mt-14 lg:text-base md:mt-8 lg:py-4 md:py-3 lg:px-16 md:px-9 bg-[rgb(40,48,68)] rounded-lg shadow-lg">Get started</button>
            </div>
            <div className=" md:w-1/2 xs:mr-0 lg:mt-16 md:mt-12 md:mr-6">
                <img className="rounded-lg object-cover w-full xs:w-[22rem] lg:w-[42rem] md:max-h-[18rem] md:w-[22rem] lg:max-h-[25rem]" src={legend2} alt="" />
            </div>
        </div>
    );
}

export default FirstDesktop;
