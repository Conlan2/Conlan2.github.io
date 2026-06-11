'use client';
import Image from "next/image";
import {Box, Button, Stack, Typography} from "@mui/material"

import Footer from "@/src/components/layout/Footer";
import { alpha } from "@mui/material/styles";
import primaryTheme from "@/src/mui/themes/primary";
import { BlogEntryAllText } from "@/src/components/blog/BlogEntryAllText";
import HamburgerSection from "@/src/components/main/HamburgerSection";


export default function blog() {
    return (<Stack flexGrow={1} sx={{
      width:"100%", 
      minWidth: "600px",
      display:"flex", 
      height:"100%"}}>
      <div id="PersonalSection"></div>
      <BlogEntryAllText 
      title={"My Personal Blog"} 
      text={"As a Person, I do not in general do social media. I don't post as I didn't see the need for clout or whatever other people seek from those sites; however, I have become increasingly convinced that I need some form of way to demonstraight how I am learning and improving better than a resume, so this blog is my answer."}>
      <Typography sx={{
        mt: 2, 
        width: "50%"
      }}>
        Up to the Summer of 2026 my posts will be refering to past events as I remember them happening. After that, I will attempt to update monthly. In general I will focus on what I learned that I found personally interesting.
      </Typography>
      </BlogEntryAllText>

      <BlogEntryAllText 
      sx={{
        bgcolor:"background.paper",
      }}
      title={"Fall 2022"} 
      text={"As a Person, I do not in general do social media. I don't post as I didn't see the need for clout or whatever other people seek from those sites; however, I have become increasingly convinced that I need some form of way to demonstraight how I am learning and improving better than a resume, so this blog is my answer."}>
      <Typography sx={{
        mt: 2, 
        width: "50%",
        
      }}>
        Up to the Summer of 2026 my posts will be refering to past events as I remember them happening. After that, I will attempt to update monthly. In general I will focus on what I learned that I found personally interesting.
      </Typography>
      </BlogEntryAllText>

      <Footer></Footer>
    </Stack>)
}