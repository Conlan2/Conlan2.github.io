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
      text={"As a Person, I do not in general do social media. I don't post as I didn't see the need for clout or whatever other people seek from those sites; however, I have become increasingly convinced that I need some form of way to demonstrate how I am learning and improving better than a resume, so this blog is my answer."}>
      <Typography sx={{
        mt: 2, 
        width: "50%",
        fontSize: 19
      }}>
        Up to the Summer of 2026 my posts will be referring to past events as I remember them happening. After that, I will attempt to update monthly. In general I will focus on what I learned that I found personally interesting.
      </Typography>
      </BlogEntryAllText>

      <BlogEntryAllText 
      sx={{
        bgcolor:"background.paper",
      }}
      title={"2020-2022"} 
      text={"I am combining the first two years of University into a single entry as most of the content from these two years was entry level to computer science. While not useless in the slightest, every Computer Scientist worth their salt should know almost everything taught here by heart. I will just stick to talking about specific exceptions."}>
      
      <Stack 
      direction="row"
      sx={{
        width: "50%",
        gap: "16px",
        mt: 2
      }}>
        <Typography sx={{
         
          
          width: "60%",
          fontSize: 19
        }}>
          I had three classes that are truly memorable from MacEwan that are relevant for this blog from this year,
           Object Oriented Programming, Human Computer Interaction, and Data Structures and Algorithms.  
          (Don't get me wrong, I loved my Earth Science courses, 
          but I don't believe that being able to visually distinguish Gold from Pyrite is
           exactly relevant to Computing Science except under very specific circumstances).
            <br></br>
            <br></br>
          Out of all classes Data Structures and Algorithms is the easiest to describe, and I have the least to say about 
          it was the class all about Programming Methodologies. Calculating the Big O notation, knowing how to make
          make algorithms with the best efficiency, that sort of thing. 
          <br></br>
          <br></br>
          
          This class was notable in that we did everything is Pseudo-code, 
          which is a practice I have some really mixed feelings about. I can see the value of creating code that should be
          arbitrary, but a decent computer scientist should be able to easily translate basic, short code from one language to another
          with some ease. So this practice feels like a waste of time. In any case, this class was definitely useful, even if just
          for making good algorithms.
        </Typography>
            
        <Stack sx={{
          width: "40%",
          justifyContent: "center",
          gap: "8px"
        }}>
          <Box sx={{
                 
                    borderRadius: 8,
                    width: "100%",
                    justifyContent: "center",
                    aspectRatio: '9/12',
                    overflow: 'hidden',
                    maxWidth: '400px',
                    maxHeight: '9900px',
                    position: "relative",
                    boxShadow: `0px 0px 10px 2px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,
                   
                   
                }}>
            <Image 
            src="/Blog/pyrite.jpg" 
            alt="A cool image of pyrite"
            fill/>
          </Box>
          <Typography sx={{width: "100%", textAlign: "center"}}>Oooooh Shiny Cube (Pyrite)</Typography>
        </Stack>
      </Stack>

      <Stack 
      direction="row"
      sx={{
        width: "50%",
        gap: "16px",
        mt: 2
      }}>

<Stack sx={{
          width: "60%",
          justifyContent: "center",
          gap: "8px"
        }}>
          <Box sx={{
                 
                    borderRadius: 8,
                    width: "100%",
                    justifyContent: "center",
                    aspectRatio: '12/8',
                    overflow: 'hidden',
                    maxWidth: '600px',
                    maxHeight: '9900px',
                    position: "relative",
                    boxShadow: `0px 0px 10px 2px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,
                   
                   
                }}>
            <Image 
            src="/Blog/truckCrash.jpg" 
            alt="Multithreading Attempt One, Visualized"
            fill/>
          </Box>
          <Typography sx={{width: "100%", textAlign: "center"}}>Multithreading Attempt One, Visualized</Typography>
        </Stack>
        <Typography sx={{
         
          
         width: "40%",
         fontSize: 19
       }}>
        Object Oriented Programming was my introduction to Java. It was not my introduction to OOP as a whole though
        as I had a high school course that introduced the concept, though it had been three years. This was when I was 
        formally taught programming patterns, factories, singletons, etc. As well, how to look for bad programming
        smells.
        <br></br><br></br>
        However, the most important thing about this class was the attached project. It was a two person group project
        where we made Property Assessment Software. It was capable of taking reading publicly available data from 
        several City of Edmonton Databases and API. It could read from both downloaded excel files and live via the api.
        The pulling ran via multithreading, but this was my first attempt at ever making a multithreaded program, so that feature was... not great.


       </Typography>
      </Stack>
      
      <Typography sx={{
        mt: 2, 
        width: "50%",
        fontSize: 19
      }}>
       Human Computer Interaction was all about creating UI for a good UX. It was also my introduction to design software such as figma
       for design prototypes, which are ubiquitous for modern programming. I even used figma to design this site! 
       The feel of software matters just as much as the functionality, most people do not find excel spreadsheet fun to use (most).

      </Typography>

      </BlogEntryAllText>

    

      <BlogEntryAllText 
      title={"Fall 2023"} 
      text={"Cybersec Into, Data 1"}
      >
      <Typography sx={{
        mt: 2, 
        width: "50%",
        
      }}>
        
      </Typography>
      </BlogEntryAllText>

      <BlogEntryAllText 
      title={"Winter 2024"} 
      text={"Cybersec Network, OOP, Datamining"}
      sx={{
        bgcolor:"background.paper",
      }}>
      <Typography sx={{
        mt: 2, 
        width: "50%",
        
      }}>
        
      </Typography>
      </BlogEntryAllText>

      <BlogEntryAllText 
      title={"Fall 2024"} 
      text={"Cybersec Local, Capstone"}
      sx={{
        
      }}>
      <Typography sx={{
        mt: 2, 
        width: "50%",
        
      }}>
        
      </Typography>
      </BlogEntryAllText>



      <Footer></Footer>
    </Stack>)
}