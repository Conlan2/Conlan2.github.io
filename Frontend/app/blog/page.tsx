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
        width: "50%",
      }}>
        Up to the Summer of 2026 my posts will be refering to past events as I remember them happening. After that, I will attempt to update monthly. In general I will focus on what I learned that I found personally interesting.
      </Typography>
      </BlogEntryAllText>

      <BlogEntryAllText 
      sx={{
        bgcolor:"background.paper",
      }}
      title={"2020-2022"} 
      text={"I am concentrating the first two years of University into a single entry as most of the content from these two years was entry level to computer science. While not usless in the slightest, every Computer Scientist worth their salt should know almost everything taught here by heart. I will just stick to talking about specfic exceptions."}>
      <Typography sx={{
        mt: 2, 
        width: "50%",
        
      }}>
        t
      </Typography>
      </BlogEntryAllText>

      <Footer></Footer>
    </Stack>)
}