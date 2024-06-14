"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const about = {
    title: 'About me',
    description: "My name is Matías, I am 23 years old, and I am a FullStack developer with approximately 6 years of experience.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Matias Monti",
        },
        {
            fieldName: "Experience",
            fieldValue: "+6 Years",
        },
        {
            fieldName: "Discord",
            fieldValue: "Falosw",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Argentina",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Spanish, English, Portuguese",
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "Most of my work has been freelance, fulfilling various tasks, and I have also worked as a programming teacher for the government of the city of Buenos Aires.",
    items: [
        {
            company: "Government of the City of Buenos Aires",
            position: "Programming Teacher",
            duration: "2022 - 2024",
        },
        {
            company: "Freelance",
            position: "C# .NET Developer",
            duration: "2022 - 2023",
        },
        {
            company: "Freelance",
            position: "JavaScript Developer",
            duration: "2021 - 2022",
        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: "I completed several courses alongside my degree, primarily on the Udemy platform, with a few additional bootcamps.",
    items: [
        {
            institution: "UNLAM",
            degree: "Systems Engineering",
            duration: "2020 - Present",
        },
        {
            institution: "Udemy",
            degree: "Back-end Developer",
            duration: "2024",
        },
        {
            institution: "Udemy",
            degree: "Full Stack Developer Course",
            duration: "2023",
        },
        {
            institution: "Digital House",
            degree: "Full Stack Developer Bootcamp",
            duration: "2019",
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "I am familiar with several technologies and languages, but the ones that interest me the most are JS, PHP, SQL, and I have recently started to familiarize myself with React.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html 5",
        },
        {
            icon: <FaCss3 />,
            name: "Css 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaPhp />,
            name: "PHP",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
    ]
}

const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1, 
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
                <div className="container mx-auto">
                    <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About Me</TabsTrigger>
                        </TabsList>
                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experience.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index)=> {
                                                return(
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div>
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index)=> {
                                                return(
                                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                        <div>
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skills.skillList.map((skill, index) => {
                                            return(
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</h3>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return(
                                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
        </motion.div>
    );
}

export default Resume;