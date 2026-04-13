import { alpha, Box, Typography } from "@mui/material";
import Image from 'next/image';
import primaryTheme from "../mui/themes/primary";

export default function AboutMeSection() {
    return (
        <Box sx={{ 
            display:"flex", 
            justifyContent:"space-around", 
            align:"center",
            width:"90%",
            height: "100%"
            }}>
                <Box sx={{ //Left Box
                    flex:1, 
                    display:"flex", 
                    justifyContent:"flex-end",
                    alignItems: "center",
                    m:1,
                    p:2
                }}>
                    <Box
                        sx = {{
                            maxWidth: '600px',
                        }}>
                        <Typography variant="subtitle1">
                            I have always been interested in everything about computers since a very young age. I even have a dimple that I got when I fell off my father's computer chair. Since I first studied programming all the way back in junior high I have dedicated myself to the Field of Computer Science.
                            <br/><br/>
                            My preferred programming subject matter is on backend and/or more technical systems, I enjoy working on complex systems that allow me to innovate which I find fulfilling. Whether it's working on a backend web program, a database application, or a management system I always find fulfillment in making a well designed system.                        
                            <br/><br/>
                            Much of my free time is spent on a variety of personal projects, programming practice, or other interests. I understand a large variety of programming languages such as Kotlin, Go, Python, C, and more. I participate in game jams to improve my skills and teamwork, as well as create mods for existing games. I also am an avid cycler, this picture is of me cycling in the Setonaikai National Park in Japan.
                            </Typography>
                    </Box>
                    </Box>

                <Box sx={{ // Right Box
                    flex:1, 
                    display:"flex", 
                    flexDirection:"column",
                    justifyContent:"center",
                    m:1,
                    p:2}}>
                
                    <Box sx={{
                                        flex: 1,
                                        borderRadius: 8,
                                        aspectRatio: '16/9',
                                        overflow: 'hidden',
                                        width: "80%",
                                        maxHeight: '1000px',
                                        position: "relative",
                                        boxShadow: `0px 3px 10px 3px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,

                                    }}>
                                        <Image
                                            src="/self_photo_wide.jpg"
                                            alt="Description"  
                                            fill           
                                            style={{ objectFit: 'cover' }} 
                                        />
                                    </Box>
                                    </Box>
            </Box>
    )

}
