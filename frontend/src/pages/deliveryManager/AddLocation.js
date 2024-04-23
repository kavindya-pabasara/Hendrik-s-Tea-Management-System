import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CustomerLocations() {
    const [name, setName] = useState("");
    const [cusID, setCusID] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [delivery_code, setDelivery_code] = useState("");
    const [error, setError] = useState("");

    function sendData(e) {
        e.preventDefault();

        // Check if name or cusID is empty
        if (!name || !cusID) {
            setError("Name and CusID are required");
            return;
        }

        const newCustomerLocation = {
            name,
            cusID,
            email,
            phone_number,
            address,
            district,
            delivery_code
        }

        // Check if a customer with the same name or cusID already exists
        axios.get(`http://localhost:8070/tea/find?name=${name}&cusID=${cusID}`)
            .then((res) => {
                if (res.data.length > 0) {
                    setError("A customer with the same name or cusID already exists");
                } else {
                    axios.post("http://localhost:8070/tea/add", newCustomerLocation)
                        .then(() => {
                            alert("Customer location Added");

                            setName("");
                            setCusID("");
                            setEmail("");
                            setNumber("");
                            setAddress("");
                            setDistrict("");
                            setDelivery_code("");
                        })
                        .catch((err) => {
                            alert(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={sendData}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Customer's Name</label>
                        <input type="text" className="form-input" id="name" placeholder="Enter Customer Name"
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cusID" className="block text-gray-700 text-sm font-bold mb-2">Customer's ID</label>
                        <input type="text" className="form-input" id="cusID" placeholder="Enter Customer ID"
                            onChange={(e) => setCusID(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="text" className="form-input" id="email" placeholder="Enter the Email"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone_number" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                        <input
                            type="text"
                            className="form-input"
                            id="phone_number"
                            maxLength="10"
                            pattern="[0-9]{10}"
                            placeholder="Enter the Phone Number"
                            onChange={(e) => setNumber(e.target.value)}
                            title="Please enter exactly 10 digits"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                        <input type="text" className="form-input" id="address" placeholder="Enter the Address"
                            onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="district" className="block text-gray-700 text-sm font-bold mb-2">District</label>
                        <input type="text" className="form-input" id="district" placeholder="Enter District"
                            onChange={(e) => setDistrict(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="delivery_code" className="block text-gray-700 text-sm font-bold mb-2">Delivery Code</label>
                        <input type="text" className="form-input" id="delivery_code" placeholder="Enter Delivery Code"
                            onChange={(e) => setDelivery_code(e.target.value)} />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
                <div className="mt-4">
                    <Link to="/alllocations" className="text-blue-500 hover:text-blue-700 text-lg">All Customer Locations</Link>
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
}
