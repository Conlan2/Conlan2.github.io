import { alpha, Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from 'next/image';
import primaryTheme from "../mui/themes/primary";
import Link from "next/link";


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
                        src="/vercel.svg"
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
                    With boundless ethusiasm toward modern technology and development I will diligently improve my skills and abilities. I am a valuable asset to any team, project, or organization.
                </Typography>
                <Stack direction="row" sx={{mt: 2}}>
                    <Button sx={{m: 1}}>
                        <Link href='#ContactsSection'>
                            Get In Touch
                        </Link>
                    </Button>
                    <Button sx={{m: 1}}>
                        <Link href='#FeaturedProjectsSection'>
                            View Projects
                        </Link>
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}