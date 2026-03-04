import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from 'next/image';
import SkillCard from "./SkillCard";


export default function SkillsAndExpertise() {
    return (
        <Box sx={{ 
            display:"flex", 
            justifyContent:"flex-start", 
            flexWrap: "wrap",
            width:"70%",
            height: "100%"
            }}>
                <SkillCard title="Frontend Development" skillText="Temp" iconSrc="/vercel.svg"/>
                <SkillCard title="Backend Development" skillText="Temp" iconSrc="/vercel.svg"/>
                <SkillCard title="Machine Learning" skillText="Temp" iconSrc="/vercel.svg"/>
                <SkillCard title="Database Technologies" skillText="Temp" iconSrc="/vercel.svg"/>
                <SkillCard title="Cloud Technologies" skillText="Temp" iconSrc="/vercel.svg"/>
                <SkillCard title="Other Skills" skillText="Temp" iconSrc="/vercel.svg"/>

            </Box>
    )

}
