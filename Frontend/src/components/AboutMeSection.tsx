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
                            I have always been interested in everything about computers since a very young age. I even have a dimple on my cheek I got from when I fell off my dad's computer chair. Since I first studied programming all the way back in junior high I have dedicated myself to this field.
                            <br/><br/>
                            My programming subject matter is on backend systems, I enjoy working on complex systems that allow me to engineer innovative solutions which I find fulfilling. Whether it's working on a backend web program, a database application, or a management system I always find gratification in making a well designed system.                        
                            <br/><br/>
                            Much of my free time is spent on a variety of personal projects, practice, and other intrests. I have made applications in Kotlin, Go, and other programming languages. I have made mods for various games. Just recently I joined a game jam and made a game so I could learn Golang and the Godot Engine. I also am an avid cycler, this picture is of me cycling in the Setonaikai National Park in Japan.
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
