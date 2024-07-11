import React from "react";
import ABOUT from "../../../assets/home/about_us.png"

const SectionThree = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-about-us bg-cover bg-center pt-[32rem]">
            <div className="h-12 bg-gradient-to-t from-black to-transparent w-full">
            </div>
            <div className="pb-12 bg-black text-center w-full ">
                <h1 className="text-5xl font-bold text-neutral-100 drop-shadow-lg">Tentang Kami</h1>
                <p className="font-medium text-white drop-shadow">Medical Enjoyneering adalah sebuah tim riset dari Universitas Brawijaya yang bergerak di bidang rekayasa teknologi kesehatan.</p>
            {/* <img src={ABOUT} alt="About Us" className="object-cover h-[36rem] w-full"/>
            <div className="text-center bg-black w-full shadow-top pt-12 pb-24"    >
                <h1 className="text-5xl font-bold text-neutral-100">Tentang Kami</h1>
                <p className="font-medium text-white">Medical Enjoyneering adalah sebuah tim riset dari Universitas Brawijaya yang bergerak di bidang rekayasa teknologi kesehatan.</p>
            </div> */}
            </div>
        </div>
    )
}

export default SectionThree;