import React, { useContext } from 'react';
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { TransactionContext } from "../context/TransactionContext";
const ServiceCard = ({ color, title, icon, subtitle }) => {
    return (
        <div className="min-w-[70%] flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
                {icon}
            </div>
            <div className="flex flex-col ml-5">
                <h1 className="mt-2 text-white text-lg">{title}</h1>
                <h1 className="mt-2 text-white text-sm md:w-9/12">{subtitle}</h1>
            </div>
        </div>
    );
}

const Services = () => {

    const { transactionCount } = useContext(TransactionContext);
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        Services that we <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-[#2952e3]"
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is Guaranteed. We ensure privacy and maintain the integrity of your links"
                />
                <ServiceCard
                    color="bg-[#8945f8]"
                    title="Fast Transactions"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Security is Guaranteed. We ensure privacy and maintain the integrity of your links"
                />
                <ServiceCard
                    color="bg-[#f84550]"
                    title="No. of Secure Links Registered"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle={`${transactionCount} successful links secured. `}
                />
            </div>
        </div>
    );
}

export default Services;