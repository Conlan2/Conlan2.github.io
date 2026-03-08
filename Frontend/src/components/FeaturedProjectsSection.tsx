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
                <ProjectCard title="Expert Profiles" desc="Crossreferenced and organized academic works for thousands of professors for the University of Alberta. " skills={new Array("test1", "test2")} imageSrc="/vercel.svg"/>
                <ProjectCard title="Fitness Application" desc="Application for seniors to track fitness health, including full google account integration with OAuth-2 security.  " skills={Array()}  imageSrc="/vercel.svg"/>
                <ProjectCard title="Personal Website" desc="Made my personal site to display my achivments. In Progress." skills={Array()}  imageSrc="/vercel.svg" />
               
            </Box>
    )

}
