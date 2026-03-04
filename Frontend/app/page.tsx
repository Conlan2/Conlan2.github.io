'use client';
import Image from "next/image";
import {Box, Button, Stack} from "@mui/material"
import HamburgerSection from "@/src/components/HamburgerSection";
import PersonalSection from "@/src/components/PersonalSection";
import AboutMeSection from "@/src/components/AboutMeSection";

export default function Home() {
  return (
    <Stack flexGrow={1} sx={{width:"100%", display:"flex", height:"100%"}}>
      <HamburgerSection sx={{bgcolor:"background.default", flex:1.15}} title=""> 
        <PersonalSection></PersonalSection>
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.paper", flex:1}} title="About Me"> 
        <AboutMeSection></AboutMeSection>
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.default", flex:1}}  title="Skills and Expertise">
      Test2
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.paper", flex:1}}  title="Projects">
      Test3
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.default", flex:1}}  title="Contacts">
      Test4
      </HamburgerSection> 
    </Stack>
  );
}
