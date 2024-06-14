"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'matiasmonti2013@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Buenos Aires, Coghlan'
    }
];

const Contact = () => {
    return (
        <motion.div initial={{opacity: 0}} 
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
                    }}
                    className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px] items-center justify-center">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Feel free to reach out to me using the contact details below. I look forward to hearing from you!
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xw:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;