import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DeviceDetail = () => {
    const { deviceId } = useParams();
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsLoading(True)
    //     }
    // })
    return (
        <>
            <Helmet>
                <title>Perangkat {deviceId}</title>
            </Helmet>
            <p>Perangkat {deviceId}</p>
        </>
    )
}

export default DeviceDetail;