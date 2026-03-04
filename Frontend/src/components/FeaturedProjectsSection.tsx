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
                <ProjectCard title="Expert Profiles" skills="Stuff" imageSrc="/vercel.svg"/>
                <ProjectCard title="Fitness Application" skills="Stuff" imageSrc="/vercel.svg"/>
                <ProjectCard title="Modding" skills="Stuff" imageSrc="/vercel.svg" />
               
            </Box>
    )

}
