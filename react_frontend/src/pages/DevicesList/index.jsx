import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const DevicesList = () => {
    const [deviceList, setDeviceList] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDeviceList = async () => {
            try {
                const response = await axios.get(`https://evanmantan.pythonanywhere.com/api/devices/`)
                setDeviceList(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchDeviceList();
    });

    if (loading) {
        return <p>Loading Daftar Perangkat...</p>
    }

    if (!deviceList) {
        return <p>Belum Ada Perangkat yang Terhubung</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <>
            <Helmet>
                <title>Perangkat</title>
            </Helmet>
            <h1>Daftar Perangkat</h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Perangkat</th>
                        <th>Kode Produk</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(deviceList).map((key) => (
                        <tr className="" key={key}>
                            <td>{Number(key)+1}</td>
                            <td>{deviceList[key].name}</td>
                            <td>{deviceList[key].product_key}</td>
                            <td><a href={`/devices/${deviceList[key].product_key}/`}>Hasil Pembacaan</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default DevicesList;