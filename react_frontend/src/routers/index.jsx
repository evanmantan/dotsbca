import React, { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import DevicesList from "../pages/DevicesList";
import DeviceDetail from "../pages/DeviceDetail";
import ReadingDetail from "../pages/ReadingDetail";


const ScrollToTop = () => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant"});
    }, [location]);

    return null;
};

const Routers = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<Navbar />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/devices" element={<DevicesList />} />
                        <Route path="/devices/:deviceId" element={<DeviceDetail />} />
                        <Route path="/devices/:deviceId/:readingId" element={<ReadingDetail />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default Routers;