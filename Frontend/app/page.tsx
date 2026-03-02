'use client';
import Image from "next/image";
import {Box, Button, Stack} from "@mui/material"
import HamburgerSection from "@/src/components/HamburgerSection";

export default function Home() {
  return (
    <Stack flexGrow={1} sx={{width:"100%", display:"flex"}}>
      <HamburgerSection sx={{bgcolor:"background.default"}} title=""> 
      Test1
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.paper"}} title="About Me"> 
      Test1
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.default"}}  title="Skills and Expertise">
      Test2
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.paper"}}  title="Projects">
      Test3
      </HamburgerSection> 
      <HamburgerSection sx={{bgcolor:"background.default"}}  title="Contacts">
      Test4
      </HamburgerSection> 
    </Stack>
  );
}
