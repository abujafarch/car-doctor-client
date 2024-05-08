import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()
    const url = `/bookings?email=${user?.email}`

    useEffect(() => {
        axiosSecure.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
    }, [url, axiosSecure])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => id !== booking._id)
                        setBookings(remaining)
                        alert("Deleted Successfully")
                    }
                    console.log(data);
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => id !== booking._id)
                    const updatedBooking = bookings.find(booking => id === booking._id)
                    updatedBooking.status = 'Confirm'
                    const newBookings = [updatedBooking, ...remaining]
                    setBookings(newBookings)
                }
                console.log(data);
            })
    }

    return (
        <div>
            <h1 className="text-2xl mt-20">total bookings: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table my-20">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} booking={booking}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;