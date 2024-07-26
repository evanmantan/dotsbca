import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { API_URL } from "../../constants";
import CustomDiv from "../../components/CustomDiv";
import { format, parseISO } from "date-fns";

const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "Ppp");
}

const DeviceDetail = () => {
    const { deviceId } = useParams();
    const [readingData, setReadingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReadingData = async () => {
            try {
                const response = await axios.get(`${API_URL}api/devices/${deviceId}/`);
                setReadingData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReadingData();
    }, [deviceId, API_URL]);

    if (loading) {
        return <CustomDiv title="Loading..." />
    }

    if (!readingData) {
        return <CustomDiv title="Perangkat Tidak Ditemukan" />
    }

    if (error) {
        let children = (
            <h1>Error: {error}</h1>
        )
        return <CustomDiv title="Error" children={children} />
    }

    let baseUrl = window.location.href;
    if (!baseUrl.endsWith("/")) baseUrl += "/";

    let children = (
        <>
            <div className="overflow-x-auto w-full px-4 text-center">
                <h1 className="text-xl font-medium">Data Perangkat {deviceId}</h1>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="shadow-2xl shadow-orange-200 mx-auto">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th>No</th>
                            <th>Waktu Pembacaan</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(readingData).map((key) => (
                            <tr key={key} className="hover:bg-gray-300">
                                <td>{Number(key)+1}</td>
                                <td>{formatDate(readingData[key].timestamp)}</td>
                                <td><a href={`${baseUrl}${readingData[key].id}`}>Detail</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
    return <CustomDiv title={`Data Perangkat ${deviceId}`} children={children}/>
}

export default DeviceDetail;