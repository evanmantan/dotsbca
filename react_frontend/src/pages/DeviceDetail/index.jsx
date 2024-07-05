import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DeviceDetail = () => {
    const { deviceId } = useParams();
    const [readingData, setReadingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReadingData = async () => {
            try {
                const response = await axios.get(`https://evanmantan.pythonanywhere.com/api/devices/${deviceId}/`);
                setReadingData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReadingData();
    }, [deviceId]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (!readingData) {
        return (
            <>
                <Helmet>
                    <title>Data Tidak Ditemukan</title>
                </Helmet>
                <p>Data Tidak Ditemukan</p>
            </>
        )
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <>
            <Helmet>
                <title>Data Perangkat {deviceId}</title>
            </Helmet>
            <p>Data Perangkat {deviceId}</p>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Waktu Pembacaan</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(readingData).map((key) => (
                        <tr key={key}>
                            <td>{Number(key)+1}</td>
                            <td>{readingData[key].timestamp}</td>
                            <td><a href={`./${readingData[key].id}`}>Detail</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default DeviceDetail;