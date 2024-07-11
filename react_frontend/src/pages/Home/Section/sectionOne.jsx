import React from "react";
import MODEL_FRONT from "../../../assets/home/model_front.png"
import MODEL_BACK from "../../../assets/home/model_back.png"

const SectionOne = () => {
    return (
        <div className="w-full flex h-dvh justify-center items-center">
            <div className="w-1/2 flex flex-col items-end">
                <h1 className="text-6xl font-bold text-blue-900 w-3/4">DOTS BCa</h1>
                <h2 className="text-4xl font-bold text-neutral-900 w-3/4">Detection On The Spot Bladder Cancer</h2>
            </div>
            <div className="w-1/2 h-full flex items-center overflow-visible">
                <img src={MODEL_FRONT} alt="DOTS BCa" className="w-3/5"/>
                <img src={MODEL_BACK} alt="DOTS BCa" className="w-1/2 relative right-56 top-12"/>
            </div>
        </div>
    )
}

export default SectionOne;