import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    return (
        <div className="card w-full border p-4 bg-base-100">
            <figure className="h-[280px]"><img className="w-full rounded-xl h-full object-cover" src={service.img} alt="Shoes" /></figure>
            <div className="mt-5">
                <h2 className="card-title font-bold mb-5">{service.title}</h2>
                <div className="flex justify-between items-center">
                    <h3 className='text-[#FF3811] text-xl font-bold'>Price : {service.price}</h3>
                    <Link to={`/checkout/${service._id}`}>
                        <button className='text-2xl text-[#FF3811]'><GoArrowRight></GoArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;