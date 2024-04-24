import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function AddReportData() {
    const { id } = useParams();
    const [vehicleType, setVehicleType] = useState("");
    const [date, setDate] = useState("");
    const [monthlyDistance, setMonthlyDistance] = useState("");
    const [fuelCost, setFuelCost] = useState("");
    const [serviceCharge, setServiceCharge] = useState("");
    const [totalCost, setTotalCost] = useState("");

    const handleFuelCostChange = (e) => {
        const input = e.target.value;
        if (!isNaN(input) && input >= 0) {
            setFuelCost(input);
        }
    };

    const handleServiceChargeChange = (e) => {
        const input = e.target.value;
        if (!isNaN(input) && input >= 0) {
            setServiceCharge(input);
        }
    };

    const handleTotalCostChange = (e) => {
        const input = e.target.value;
        if (!isNaN(input) && input >= 0) {
            setTotalCost(input);
        }
    };

    function sendData(e) {
        e.preventDefault();

        const newAddReportData = {
            vehicleType,
            date,
            monthlyDistance,
            fuelCost,
            serviceCharge,
            totalCost
        }

        axios.post("http://localhost:8070/report/add", newAddReportData)
            .then(() => {
                alert("Data Added")

                setVehicleType("");
                setDate("");
                setMonthlyDistance("");
                setFuelCost("");
                setServiceCharge("");
                setTotalCost("");
            })
            .catch((err) => {
                alert(err)
            });
    }

    
    const navigate = useNavigate();

    const handleAllReportDetails = () => {
        navigate(`/deliveryManager/allReportData/${id}`);
    }

    return (
        <div className="flex justify-center items-center h-screen absolute mt-48 left-1/3 w-1/2">
            <div className="w-1/2 p-10">
                <form onSubmit={sendData} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="vehicleType" className="block text-gray-700 text-sm font-bold mb-2">Vehicle Type</label>
                        <input
                            type="text"
                            className="form-input mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="vehicleType"
                            placeholder="Enter vehicle type"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                        <input
                            type="date"
                            className="form-input mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="date"
                            placeholder="Enter date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="monthlyDistance" className="block text-gray-700 text-sm font-bold mb-2">Monthly Distance (km)</label>
                        <input
                            type="number"
                            className="form-input mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="monthlyDistance"
                            placeholder="Enter monthly distance"
                            value={monthlyDistance}
                            onChange={(e) => setMonthlyDistance(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fuelCost" className="block text-gray-700 text-sm font-bold mb-2">Fuel Cost (LKR)</label>
                        <input
                            type="number"
                            className="form-input mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="fuelCost"
                            placeholder="Enter fuel cost"
                            value={fuelCost}
                            onChange={handleFuelCostChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="serviceCharge" className="block text-gray-700 text-sm font-bold mb-2">Service Charge (LKR)</label>
                        <input
                            type="number"
                            className="form-input mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="serviceCharge"
                            placeholder="Enter service charge"
                            value={serviceCharge}
                            onChange={handleServiceChargeChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="totalCost" className="block text-gray-700 text-sm font-bold mb-2">Total Cost (LKR)</label>
                        <input
                            type="number"
                            className="form-input mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            id="totalCost"
                            placeholder="Enter total cost"
                            value={totalCost}
                            onChange={handleTotalCostChange}
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
                <div className="mt-4">
                    <button onClick={handleAllReportDetails} className="text-blue-500 hover:text-blue-700 text-lg">All Report Details</button>
                </div>
            </div>
        </div>
    );
}
