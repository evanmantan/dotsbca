import React from "react";
import ABOUT from "../../../assets/home/about_us.png"

const SectionThree = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-about-us bg-cover bg-center pt-64 lg:pt-[32rem]">
            <div className="h-12 bg-gradient-to-t from-black to-transparent w-full">
            </div>
            <div className="pb-12 px-4 bg-black text-center w-full gap-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-neutral-100 drop-shadow-lg">Tentang Kami</h1>
                <p className="text-sm lg:text-base font-normal lg:font-medium text-white drop-shadow">Medical Enjoyneering adalah sebuah tim riset dari Universitas Brawijaya yang bergerak di bidang rekayasa teknologi kesehatan.</p>
            </div>
        </div>
    )
}

export default SectionThree;