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
      <div id="PersonalSection"></div>
      <HamburgerSection sx={{
        bgcolor:"background.default",
         flex:1.15,
         
        }} title=""
         > 
        <PersonalSection></PersonalSection>
      </HamburgerSection> 
      <div id="AboutMeSection"></div>
      <HamburgerSection sx={{bgcolor:"background.paper", flex:1}} title="About Me"> 
        <AboutMeSection></AboutMeSection>
      </HamburgerSection> 
      <div id="SkillsAndExpertise"></div>
      <HamburgerSection sx={{bgcolor:"background.default", flex:1}}  title="Skills and Expertise">
        <SkillsAndExpertise></SkillsAndExpertise>
      </HamburgerSection> 
      <div id="FeaturedProjectsSection"></div>
      <HamburgerSection sx={{bgcolor:"background.paper", flex:1}}  title="Projects">
        <FeaturedProjectsSection></FeaturedProjectsSection>
      </HamburgerSection> 
      <div id="ContactsSection"></div>
      <HamburgerSection sx={{bgcolor:"background.default", flex:1}}  title="Contacts">
        <ContactsSection></ContactsSection>
      </HamburgerSection> 
      <Footer></Footer>
    </Stack>
  );
}
