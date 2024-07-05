import React from "react";
import { Helmet } from "react-helmet-async";

import SectionOne from "./Section/sectionOne";
import SectionTwo from "./Section/sectionTwo";
import SectionThree from "./Section/sectionThree";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Beranda</title>
            </Helmet>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </>
    )
}

export default Home;