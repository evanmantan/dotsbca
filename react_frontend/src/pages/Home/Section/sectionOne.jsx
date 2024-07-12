import React from "react";
import MODEL from "../../../assets/home/model.png"

const SectionOne = () => {
    return (
        <div className="w-full flex h-dvh justify-center items-center">
            <div className="w-3/5 flex flex-col items-end">
                <h1 className="text-6xl font-bold text-blue-900 w-3/4">DOTS BCa</h1>
                <h2 className="text-4xl font-bold text-neutral-900 w-3/4">Detection On The Spot Bladder Cancer</h2>
            </div>
            <div className="w-2/5 h-full flex items-center overflow-visible">
                <img src={MODEL} className="w-4/5"/>
            </div>
        </div>
    )
}

export default SectionOne;