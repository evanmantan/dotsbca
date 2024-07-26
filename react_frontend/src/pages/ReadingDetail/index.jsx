import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import CustomDiv from "../../components/CustomDiv";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReadingDetail = () => {
    const { deviceId, readingId } = useParams()
    const [readingData, setReadingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const excludedColumns = new Set(['id', 'timestamp', 'updated_at', 'device', 'data10', 'data11'])
    const customNames = {
        data1: "415 nm",
        data2: "445 nm",
        data3: "480 nm",
        data4: "515 nm",
        data5: "555 nm",
        data6: "590 nm",
        data7: "630 nm",
        data8: "680 nm",
        data9: "NIR"
    };

    useEffect(() => {
        const fetchReadingData = async () => {
            try {
                const response = await axios.get(`${API_URL}api/devices/${deviceId}/${readingId}`);
                setReadingData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchReadingData();
    }, [deviceId, readingId, API_URL]);

    if (loading) {
        return <CustomDiv title="Loading..." />;
    }

    if (!readingData) {
        return <CustomDiv title="Data Pembacaan Tidak Ditemukan" />
    }

    if (error) {
        let children = (
            <h1>Error: {error}</h1>
        )
        return <CustomDiv title="Error" children={children} />
    }

    // Chart setup
    const filteredData = Object.entries(readingData).filter(([key]) => !excludedColumns.has(key));
    const labels = filteredData.map(([key]) => customNames[key] || key);
    const dataValues = filteredData.map(([, value]) => value);
    const colors = [
        "rgb(118, 0, 237)",
        "rgb(0, 40, 255)",
        "rgb(0, 213, 255)",
        "rgb(31, 255, 0)",
        "rgb(179, 255, 0)",
        "rgb(255, 223, 0)",
        "rgb(255, 79, 0)",
        "rgb(255, 0, 0)",
        "rgb(42, 54, 91)",
    ]

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Intensitas Panjang Gelombang',
                data: dataValues,
                backgroundColor: colors.slice(0, dataValues.length)
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 5000
            }
        }
    };



    let children = (
        <div className="w-full flex flex-col items-center gap-8 px-4 overflow-x-auto text-center">
            <h1 className="text-xl font-medium">
                Perangkat {deviceId} Data {readingId}
            </h1>
            <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-center justify-center">
                <table className="shadow-2xl shadow-orange-200 mx-auto">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th>Warna</th>
                            <th>Intensitas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData
                            .map(([key,value]) => (
                            <tr key={key}>
                                <td>{customNames[key] || key}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>           
                <div className="h-full border border-opacity-20 px-2 py-1 border-black shadow-2xl shadow-orange-200">
                    <Bar data={data} options={options}/>
                </div>
            </div>
        </div>
    )
    return <CustomDiv title={`Perangkat ${deviceId} Data ${readingId}`} children={children} />
};

export default ReadingDetail;