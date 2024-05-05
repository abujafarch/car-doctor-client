import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const CheckOut = () => {
    const { _id, title, price, img } = useLoaderData()
    const params = useParams()
    console.log(params)
    const { user } = useContext(AuthContext)

    const handleBookNow = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const price = form.amount.value
        const date = form.date.value
        const booking = { name, email, price, img, date, service: title, service_id: _id }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Booking Done")
                }
                console.log(data)
            })
    }

    return (
        <div>
            <h2 className="text-4xl font-semibold mt-20">Book Now: {title}</h2>
            <div className="card shrink-0 w-full mt-10 bbooking">
                <form onSubmit={handleBookNow} className="card-body">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="name" className="input input-bbookinged" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">date</span>
                            </label>
                            <input type="date" name="date" placeholder="date" className="input input-bbookinged" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="email" name="email" disabled value={user?.email} placeholder="email" className="input input-bbookinged" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">due amount</span>
                            </label>
                            <input type="text" name="amount" disabled placeholder="due amount" className="input input-bbookinged" value={`$ ${price}`} required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;