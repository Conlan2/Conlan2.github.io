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
          <Typography sx={{width: "100%", textAlign: "center"}}>First Attempt at Multithreading, Visualized</Typography>
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
      title={"Summer 2023"} 
      text={"The Summer of 2023 was when I had my first foray into Cybersecurity. When I first start Compsci I \
        actually wanted to strongly avoid doing Cybersecurity. Not because I didn't believe it was interesting, \
        it just wasn't my cup of tea, at least to my entry level knowledge. I only took it because there was a schedule conflict that blocked \
        my preferred course."}
      >
      <Typography sx={{
        mt: 2, 
        width: "50%",
        fontSize: 19
        
      }}>
        However, it turned out that Cybersecurity was, in fact, my cup of tea. I can't help but thank my Professor for the course
        BLANK BLANK, who was very passionate about the topic, on top of being a bit... "Eccentric". There was a time where everyone
        chose the exact same project template that he provided and threatened to kill himself because of that. This course was just the 
        introduction to the topic, and focused mostly on terminology and the basics so we could understand future courses, so I can't write too
        much about it, but it was good.
        <br></br><br></br>
        The other course of note from the summer (and the only other course of the summer) was Networking (The physical kind, not the
        make friends to make references which I didn't do so I can't find a job despite getting solid 4.0 for my last year of just computer 
        science and could only get one year of programming work at the UofA via a professor. Yeah, the other kind of networking. Thank you for my 
        Ted Talk). 
        <br></br><br></br>
      </Typography>
          
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
          In any case, this was the class that taught me the intricacies of network 
          protocols, as well as packet structure. This would be soon very beneficial for my Network 
          Security Course the following semester. The project for this course was 
          a simple email server, the kind that used to be used all over internal networks 
          before the days the gmail. 
          <br></br><br></br>
          The real meat of this project was that A: the packets had to be created and sent 
          manually, and B: the data had to be encrypted with a handshake. This means that we 
          had to split the data into the correctly size chunks, encrypt them (we used asymmetrical 
          encryption for this), and then decrypt them at the destination. I personally enjoy this 
          type of low-level work, I would have done more level programming work at the university if 
          it didn't conflict with my schedule.   
          <br></br><br></br>   
           
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

      </BlogEntryAllText>

      <BlogEntryAllText 
      title={"Fall 2023"} 
      text={"This was possibly my favorite semester of University. Every single course was a computer science course \
        I enjoyed. The course load was lighter than than previous semesters, given I had done two courses in the \
        spring summer term. The courses were: Operating Systems, Computer Network Security, and Datamining and Advanced Databases. \
        I cannot say what I found the most interesting as all of them varied wildly, it would be like comparing your favorite \
        ice cream to your favorite pizza. (Unless your favorite pizza is an ice cream pizza I guess...). \
        "}
      sx={{
        bgcolor:"background.paper",
      }}>
      <Typography sx={{
        mt: 2, 
        width: "50%",
        fontSize: 19
      }}>
        Operating System's was all about explaining exactly how operating systems functioned, as well as the differences between 
        versions and types (Monolithic vs Micro vs Hybrid). Many people, including programmers treat the OS as effectively just a 
        magic black box, that does things. Especially for low level applications, knowing how to work with the operating system is key.
        <br></br><br></br>
        The Project for the course was one of the best that I worked on for the entirety of University. We had to recreate the command line
        for a Linux Machine. This meant that it had to have the following features: 1. Be Capable of Running built in commands from /bin, 
        such as ls, mv, etc. 2. The program had to be able to use pipes (take the output from one program and send it to another). 3. 
        The most difficult, the command line had to be Regex capable. 4. The program had to be able to run commands in the foreground or background
        with &.
        <br></br><br></br>
        This project was the multithreading redemption from the earlier multithreaded monster of a project from the previous years.
        What helped me the most was simply the fact that this course taught how multithreading actually works, and how different operating
        systems handle thread locking, mutex, etc. (Wow! Actually knowing how something works allows you to make it better, perhaps
        vibe coders should have a bit of a think about their slop? Nah! They don't know how!)        
        <br></br><br></br>
        Computer Network Security was my first higher level security course. My favorite part was that this course was real. What 
        do I mean by that? The project for the course was not some fake simulation like "Image working for company A, and you are auditing...".
        No, as part of the project we performed an actual audit on a actual company. The company for our project, each group got their own,
        was called Profile Tree, a website builder from Ireland. I want to say more about it, but we had to sign NDAs because this was 
        actual Security Work on a real company so thats not an option for this blog.
        <br></br><br></br>
        We also joined a Cybersecurity Competition called the NCL, National Cyber League. This is a North American Competition including 
        several Universities and Schools, including some for the US military. We participated in two total competitions, for this and the 
        next semester and each semester had two parts, a individual and team competition. In every single Competition, I can say with
        full confidence that I did great. In three of the competitions, both individual and one team, I was in the top 1% of individuals. 
        For the Spring 2024 competition, I was 48 out of 7406. Only 47 people, including cybersecurity professionals, did better than me.
        It is one my proudest achievements. I even got medals for it.
        <br></br><br></br>
        Datamining and Advanced Databases was another great course all about how not just to manage large databases, but how to get useful 
        information from Big Data. Our Professor (Mohammad El Hadj, by way, was one of my favorite Professors) made sure to define the difference
        between information and data, data was just the actual content that you had, information was the useful details that you could pull
        from it. This course and the following introduction to machine learning were very related in what we were doing, the focus was on what was expected.
        This course was all about how we can get good data, while the machine learning course, which I will soon get to, was all about the techiques
        themselves.
       
      </Typography>

      </BlogEntryAllText>

      <BlogEntryAllText 
      title={"Winter 2024"} 
      text={"My final semester, which also was overwhelming. Due to scheduling issues, which MacEwan due its smaller size had a lot of. \
        I had four courses and one capstone project. One Course was Computer Vision, a course about image recognition and detection, \
        however, even the Course Professor admitted that course was out of date and new developments that were not really being taught in the course\
        so I can't say much. Everything else was interesting as a course."}
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