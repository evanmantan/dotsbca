import React from "react";
import MODEL from "../../../assets/home/model.png"

const SectionOne = () => {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row h-dvh justify-center items-center gap-4 lg:gap-0">
            <div className="lg:w-3/5 flex flex-col items-center lg:items-end text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-900 w-3/4">DOTS BCa</h1>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-neutral-900 w-3/4">Detection On The Spot Bladder Cancer</h2>
            </div>
            <div className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-2/5 lg:h-full flex justify-center items-center overflow-visible">
                <img src={MODEL} className="w-4/5"/>
            </div>
        </div>
    )
}

export default SectionOne;