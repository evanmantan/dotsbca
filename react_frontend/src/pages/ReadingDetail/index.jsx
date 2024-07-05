import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ReadingDetail = () => {
    const { deviceId, readingId } = useParams()
    const [readingData, setReadingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const excludedColumns = new Set(['id', 'timestamp', 'updated_at', 'device'])
    useEffect(() => {
        const fetchReadingData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/devices/${deviceId}/${readingId}`);
                setReadingData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReadingData();
    }, [deviceId, readingId]);

    if (loading) {
        return <p>Loading...</p>;
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
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <Helmet>
                <title>Perangkat {deviceId} Data {readingId}</title>
            </Helmet>
            <p>
                Perangkat {deviceId} Data {readingId}
            </p>
            <table>
                <thead>
                    <th>Warna</th>
                    <th>Intensitas</th>
                </thead>
                <tbody>
                    {readingData && Object.entries(readingData)
                        .filter(([key]) => !excludedColumns.has(key))
                        .map(([key,value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ReadingDetail;