// import { useEffect, useState } from "react";
import Service from "./Service";
import useServices from "../../../../hooks/useServices";

const Services = () => {

    const services = useServices()

    return (
        <div className="mt-36 mb-10">
            <div className="text-center w-[720px] mx-auto">
                <h1 className="text-xl text-[#FF3811] mb-5 font-bold">Service</h1>
                <h1 className="text-[#151515] mb-5 text-5xl font-bold">Our Service Area</h1>
                <p className="text-lg text-[#737373] ">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-7">
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;