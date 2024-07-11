import React from "react";
import { Helmet } from "react-helmet-async";

const CustomDiv = ({ title, children }) => {
    const heading = (
        <h1 className="text-xl font-medium">{title}</h1>
    )
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="py-28 flex flex-col items-center justify-center gap-8">
                {children ? children : heading}
            </div>
        </>
    )
}

export default CustomDiv;