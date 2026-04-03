"use client"
import { alpha, Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from 'next/image';
import primaryTheme from "../mui/themes/primary";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function PersonalSection() {

    return (
        <Box sx={{ 
        display:"flex", 
        justifyContent:"space-around", 
        alignContent:"flex-start",
        width:"90%",
        }}>
            <Box sx={{ //Left Box
                flex:1, 
                display:"flex", 
                justifyContent:"flex-end",
                alignItems: "center",
                m:1,
                p:2
            }}>
                <Box sx={{
                    flex: 1,
                    borderRadius: 8,
                    aspectRatio: '9/14',
                    overflow: 'hidden',
                    maxWidth: '600px',
                    maxHeight: '9900px',
                    position: "relative",
                    boxShadow: `0px 3px 10px 3px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,
                    transition: "box-shadow 0.1s ease-in-out",
                   
                }}>
                    <Image
                        src="/top_photo.jpg"
                        alt="Description"  
                        fill           
                        style={{ objectFit: 'cover' }} 
                    />
                </Box>
            </Box>

            <Box sx={{ // Right Box
                flex:1, 
                display:"flex", 
             
                flexDirection:"column",
                justifyContent:"center",
                m:1,
                p:2}}>
                <Typography variant="h2">
                    Conlan Myers
                </Typography>
                <Typography variant="h2" sx={{color:"secondary.main"}}>
                    Software Engineer
                </Typography>
                <Typography variant="h5" sx={{maxWidth: "70%"}}>
                    With boundless ethusiasim toward modern technology and development I diligently improve my Skills. I am a valuable contributor to any team, project, or organization.
                </Typography>
                <Stack direction="row">
                    <Box sx={{
              
                    display: "flex",
                    width: "100%",
                    height: "100%"
                    }}>
                        <Link href="https://www.linkedin.com/in/conlan-myers-18b140266/">
                            <Button>
                                <LinkedInIcon sx={{width:"40px", height: "100%"}}></LinkedInIcon>
                            </Button>
                        </Link>
                        <Link href="https://github.com/Conlan2">
                            <Button>
                                <GitHubIcon sx={{width:"40px", height: "100%"}}></GitHubIcon>
                            </Button>
                        </Link>
                    </Box>
 
                </Stack>
                <Stack direction="row" >
                    <Button sx={{m: 1, p: 1,
                            boxShadow: `0px 0px 10px 3px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,
                            transition: "box-shadow 0.1s ease-in-out",
                            ":hover": {
                                boxShadow: `0px 0px 20px 5px ${alpha(primaryTheme.palette.secondary.main, 1)}`
                            }
                    }}>
                        <Link href='#ContactsSection'>
                            Get In Touch
                        </Link>
                    </Button>
                    <Button sx={{m: 1, p: 1,
                            boxShadow: `0px 0px 10px 3px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,
                            transition: "box-shadow 0.1s ease-in-out",
                            ":hover": {
                                boxShadow: `0px 0px 20px 5px ${alpha(primaryTheme.palette.secondary.main, 1)}`
                            }
                    }}>
                        <Link href='#FeaturedProjectsSection'>
                            View Projects
                        </Link>
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}