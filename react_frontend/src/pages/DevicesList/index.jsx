import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { API_URL } from "../../constants";
import CustomDiv from "../../components/CustomDiv";

const DevicesList = () => {
    const [deviceList, setDeviceList] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDeviceList = async () => {
            try {
                const response = await axios.get(`${API_URL}api/devices/`)
                setDeviceList(response.data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };

        fetchDeviceList();
    }, [API_URL]);

    if (loading) {
        return <CustomDiv title="Loading Daftar Perangkat..." />
    }

    if (!deviceList) {
        return <CustomDiv title="Belum Ada Perangkat yang Terhubung" />
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
            <div className="w-full px-4 text-center overflow-x-auto">
                <h1 className="text-xl font-medium">Daftar Perangkat</h1>
            </div>
            <div className="overflow-x-auto w-full px-4">
                <table className="shadow-2xl shadow-orange-200 mx-auto">
                    <thead className="bg-blue-900 text-white">
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
                                <td><a href={`${baseUrl}${deviceList[key].product_key}/`}>Hasil Pembacaan</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>  
        </>
    )
    return <CustomDiv title="Daftar Perangkat" children={children}/>
}

export default DevicesList;