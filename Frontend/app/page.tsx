'use client';
import Image from "next/image";
import {Box, Button, Stack} from "@mui/material"
import HamburgerSection from "@/src/components/HamburgerSection";
import PersonalSection from "@/src/components/PersonalSection";
import AboutMeSection from "@/src/components/AboutMeSection";
import SkillsAndExpertise from "@/src/components/SkillsAndExpertise";
import FeaturedProjectsSection from "@/src/components/FeaturedProjectsSection";
import ContactsSection from "@/src/components/ContactsSection";
import Footer from "@/src/components/Footer";
import { alpha } from "@mui/material/styles";
import primaryTheme from "@/src/mui/themes/primary";

export default function Home() {
  return (
    <Stack flexGrow={1} sx={{width:"100%", display:"flex", height:"100%"}}>
      <HamburgerSection sx={{
        bgcolor:"background.default",
         flex:1.15,
         
        }} title=""
         > 
        <div id="PersonalSection"></div>
        <PersonalSection></PersonalSection>
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.paper", flex:1}} title="About Me"> 
        <div id="AboutMeSection"></div>
        <AboutMeSection></AboutMeSection>
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.default", flex:1}}  title="Skills and Expertise">
        <div id="SkillsAndExpertise"></div>
        <SkillsAndExpertise></SkillsAndExpertise>
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.paper", flex:1}}  title="Projects">
        <div id="FeaturedProjectsSection"></div>
        <FeaturedProjectsSection></FeaturedProjectsSection>
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.default", flex:1}}  title="Contacts">
        <div id="ContactsSection"></div>
        <ContactsSection></ContactsSection>
      </HamburgerSection> 
      <Footer></Footer>
    </Stack>
  );
}
