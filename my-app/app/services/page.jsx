"use client";

import {BsArrowDownRight} from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'FullStack Web Development',
        description: 'Creation of complete web applications using modern technologies in Front-end and Back-end.',
        href: "https://github.com/MatiasTMonti/DevWebCamp"
    },
    {
        num: '02',
        title: 'Front-end Development',
        description: 'Development of responsive and engaging user interfaces using modern front-end technologies.',
        href: "https://blogcoffefrontend.netlify.app/"
    },
    {
        num: '03',
        title: 'Game Development',
        description: 'Creation of interactive and entertaining games for various platforms, including PC and mobile.',
        href: "https://play.google.com/store/apps/details?id=com.Monti2023.TrickDisc&hl=es_AR&gl=US"
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{opacity: 0}} 
                            animate={{
                                opacity: 1,
                                transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                            >
                            {services.map((service, index) => {
                                return(
                                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                        <div className="w-full flex justify-between items-center">
                                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                                {service.num}
                                            </div>
                                            <a href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                                <BsArrowDownRight className="text-primary text-3xl"/>
                                            </a>
                                        </div>
                                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                        <p className="text-white/60">{service.description}</p>
                                        <div className="border-b border-white/20 w-full"></div>
                                    </div>
                                );
                            })}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;