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
                <SkillCard title="Frontend Development" skillText="Html, Css, Javascript, Typescript, React, Next.js, Jetpack Compose" iconSrc="/vercel.svg"/>
                <SkillCard title="Backend Development" skillText="REST, Django, Django Rest, Express.js, Oauth-2, " iconSrc="/vercel.svg"/>
                <SkillCard title="Machine Learning and AI" skillText="Tensorflow, Scikit-Learn, " iconSrc="/vercel.svg"/>
                <SkillCard title="Database Technologies" skillText="SQL, mySQL, Microsoft SQL Server, PostgreSQL, MongoDB" iconSrc="/vercel.svg"/>
                <SkillCard title="Cloud Technologies" skillText="Temp" iconSrc="/vercel.svg"/>
                <SkillCard title="Other Skills" skillText="OOP, Agile, CI/CD, Data Analyitics" iconSrc="/vercel.svg"/>

            </Box>
    )

}
