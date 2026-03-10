import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from 'next/image';
import SkillCard from "./SkillCard";
import ProjectCard from "./ProjectCard";


export default function FeaturedProjectsSection() {
    return (
        <Box sx={{ 
            display:"flex", 
            justifyContent:"space-around", 
            flexWrap: "wrap",
            width:"70%",
            height: "100%"
            }}>
                <ProjectCard title="Expert Profiles" 
                desc="Crossreferenced and organized academic works for thousands of professors for the University of Alberta. As well, performed LGA analysis on the data. " 
                skills={new Array("Python", "Django", "Django REST Api", "Scikit-Learn", "mySQL", "Docker")} 
                imageSrc="/uofa2.png"/>
                <ProjectCard title="Fitness Application" 
                desc="Application for seniors to track fitness health, including full google account integration with OAuth-2 security.  " 
                skills={Array("Javascript", "Typescript", "Next.js", "Next-Auth", "OAuth-2", "Express.js", "Node.js", "Docker", "PostgeSQL")}  
                imageSrc="/Vtrek2.png"/>
                <ProjectCard title="NCL Compititions" desc="Performed in Multiple Cybersecurity Compitions in the National Cyber League, Achiving high score in the top 1% of participants both individually and in teams." 
                skills={Array("Python", "Javascript", "Cybersecurity", "Log Analysis", "Cryptography", "Digital Forensics", "Network Analysis")}  
                imageSrc="/NCLpic.png" />
               
            </Box>
    )

}
