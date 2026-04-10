import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from 'next/image';
import SkillCard from "./SkillCard";
import MonitorIcon from '@mui/icons-material/Monitor';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PersonIcon from '@mui/icons-material/Person';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
export default function SkillsAndExpertise() {
    return (
        <Box sx={{ 
            display:"flex", 
            justifyContent:"flex-start", 
            flexWrap: "wrap",
            width:"75%",
            height: "100%"
            }}>
                <SkillCard title="Frontend Development" skillText="Html, Css, Javascript, Typescript, React, Next.js, Jetpack Compose" icon={
                    <MonitorIcon></MonitorIcon>
                }/>
                <SkillCard title="Backend Development" skillText="REST, Django, Django Rest, Express.js, Oauth-2" icon={
                    <SettingsSuggestIcon></SettingsSuggestIcon>
                }/>
                <SkillCard title="Database Technologies" skillText="SQL, mySQL, Microsoft SQL Server, PostgreSQL, MongoDB" icon={
                    <StorageIcon></StorageIcon>
                }/>
                <SkillCard title="Data Analysis" skillText="R, Data-Mining, Data Analyitics, Cluster Analysis, K-means, PCA Analysis" icon={
                    <DataThresholdingIcon></DataThresholdingIcon>
                }/>
               
                <SkillCard title="AI and Machine Learning" skillText="Tensorflow, Scikit-Learn, Claude Code, Gemni" icon={
                    <SmartToyIcon></SmartToyIcon>
                }/>
                <SkillCard title="Other Skills" skillText="OOP, Agile, CI/CD, Automated Testing, " icon={
                    <PersonIcon></PersonIcon>
                }/>

            </Box>
    )

}
